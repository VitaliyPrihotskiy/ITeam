import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap  } from 'rxjs';
import { CatsService } from '../services/cats.service';
import { loadCats, loadCatsFailure, loadCatsSuccess, setPaginationData } from './cats.action';
import { getPageSize, getCurrentPage } from './cats.selectors';

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
      concatLatestFrom(() => [
        this.store.select(getPageSize),
        this.store.select(getCurrentPage),
      ]),
      switchMap(([, pageSize, currentPage]) => {
        return this.catsService.getCats(pageSize, currentPage).pipe(
          map((catsData) => loadCatsSuccess({ catsData })),
          catchError((error) => {
            return of(loadCatsFailure(error));
          })
        );
      })
    )
  );

  loadsetPaginationDataCats$ = createEffect(() =>
    this.actions$.pipe(
      ofType(setPaginationData),
      map(() => loadCats())
    )
  );
}