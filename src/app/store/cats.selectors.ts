import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Cat } from '../models/cats.model';
import { CatsState, CATS_FEATURE_KEY } from './cats.reducer';

const getCatsFeatureState = createFeatureSelector<CatsState>(CATS_FEATURE_KEY);

export const getCats = createSelector(
  getCatsFeatureState,
  (state) => state.cats
);

export const getFilterString = createSelector(
  getCatsFeatureState,
  (state) => state.filterString
);

export const getShownCats = createSelector(
  getCatsFeatureState,
  (state) => state.shownCats
);

export const getFilteredCats = createSelector(
  getCats,
  getFilterString,
  getShownCats,
  (cats, filterString, shownCats) => filter(filterString, cats, shownCats)
);

export const getFilteredCatsViewModel = createSelector(
  getFilteredCats,
  getFilterString,
  (cats, filterString) => ({
    cats,
    filterString,
  })
);

function filter(input: string, itemList: Cat[], length: number | null): Cat[] {
  input = input.toLowerCase();
  itemList = itemList.filter(
    (e) =>
      e.breedName.toLowerCase().includes(input) ||
      e.breedDescription.toLowerCase().includes(input) ||
      e.breedTemperament.toLowerCase().includes(input)
  );
  if (length) {
    itemList = itemList.slice(0, length);
  }
  return itemList;
}
