import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { GET_CATS_URL, headers } from '../constants/cats.constants';
import { Cat, CatFromAPI } from '../models/cats.model';

@Injectable({ providedIn: 'root' })
export class CatsService {
  constructor(private httpClient: HttpClient) {}

  getCats(): Observable<Cat[]> {
    return this.httpClient.get<CatFromAPI[]>(GET_CATS_URL, { headers }).pipe(
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
