import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { params } from '../constants/cats.constants';
import { CatFromAPI } from '../models/cat-api.models';
import { ViewCat } from '../models/cats.model';

@Injectable({ providedIn: 'root' })
export class CatsService {
  constructor(private httpClient: HttpClient) {}

  getCats(): Observable<ViewCat[]> {
    return this.httpClient.get<CatFromAPI[]>(environment.cat_api_url, { params }).pipe(
      map((cats) =>
        cats.map((cat) => {
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
        })
      )
    );
  }
}
