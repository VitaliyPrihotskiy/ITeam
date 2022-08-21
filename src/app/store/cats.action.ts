import { createAction, props } from '@ngrx/store';
import { CatsData } from '../models/cats-data.model';

function scoped(templateString: TemplateStringsArray) {
  return `Cats: ${templateString[0]}`;
}

export const loadCats = createAction(
  scoped`Load Cats`
);

export const loadCatsSuccess = createAction(
  scoped`Load Cats Success`,
  props<{ catsData: CatsData }>()
);

export const loadCatsFailure = createAction(
  scoped`Load Cats Failure`,
  props<{ error: unknown }>()
);

export const setFilterString = createAction(
  scoped`Set Filter String`,
  props<{ filterString: string }>()
);

export const setPaginationData = createAction(
  scoped`Set Pagination Data`,
  props<{ pageSize: number; currentPage: number }>()
);
