import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap,withLatestFrom  } from 'rxjs';
import { CatsService } from '../services/cats.service';
import { loadCats, loadCatsFailure, loadCatsSuccess } from './cat.action';

@Injectable()
export class CatsEffect {
  constructor(
    private readonly actions$: Actions,
    private readonly catsService: CatsService,
    private readonly store: Store,
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