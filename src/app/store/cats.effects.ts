import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap  } from 'rxjs';
import { CatsService } from '../services/cats.service';
import { loadCats, loadCatsFailure, loadCatsSuccess } from './cats.action';

@Injectable()
export class CatsEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly catsService: CatsService,
  ) {}

  loadCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadCats),
      switchMap(() => {
        return this.catsService.getCats().pipe(
          map((cats) => loadCatsSuccess({ cats })),
          catchError((error) => {
            return of(loadCatsFailure(error));
          })
        );
      })
    )
  );
}