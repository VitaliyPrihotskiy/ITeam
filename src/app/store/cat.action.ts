import { createAction, props } from '@ngrx/store';
import { Cat } from '../models/cats.model';

function scoped(templateString: TemplateStringsArray) {
  return `Cats: ${templateString[0]}`;
}

export const loadCats = createAction(
  scoped`Load Cats`
);

export const loadCatsSuccess = createAction(
  scoped`Load Cats Success`,
  props<{ cats: Cat[] }>()
);

export const loadCatsFailure = createAction(
  scoped`Load Cats Failure`,
  props<{ error: unknown }>()
);

export const setFilterString = createAction(
  scoped`Set Filter String`,
  props<{ filterString: string }>()
);

export const setShownCats = createAction(
  scoped`Set Shown Cats String`,
  props<{ shownCats: number|null }>()
);