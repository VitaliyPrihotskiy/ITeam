import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GET_CATS_URL } from '../constants/cats.constants';
import { CatFromAPI } from '../models/cat-api.models';
import { CatsData } from '../models/cats-data.model';

@Injectable({ providedIn: 'root' })
export class CatsService {
  constructor(private httpClient: HttpClient) { }

  getCats(pageSize: number, currentPage: number): Observable<CatsData> {
    return this.httpClient.get<CatFromAPI[]>(GET_CATS_URL(pageSize, currentPage), { observe: 'response' }).pipe(
      map((resp) => {

        const catsCount = resp?.headers?.get('pagination-count');
        const cats = resp.body || [];

        return {
          cats: cats.map((cat) => {
            const {
              name: breedName,
              description: breedDescription,
              temperament: breedTemperament,
            } = cat.breeds[0];
            const { url } = cat;

            return {
              breedName,
              breedDescription,
              breedTemperament,
              url,
            };
          }),
          catsCount: catsCount ? +catsCount : 0
        }
      }
      )
    );
  }
}
