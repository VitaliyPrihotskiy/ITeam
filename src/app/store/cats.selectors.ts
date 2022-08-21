import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ViewCat } from '../models/view-cat.model';
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

export const getCatsCount = createSelector(
  getCatsFeatureState,
  (state) => state.catsCount
);

export const getPageSize = createSelector(
  getCatsFeatureState,
  (state) => state.pageSize
);

export const getCurrentPage = createSelector(
  getCatsFeatureState,
  (state) => state.currentPage
);

export const getIsDataLoading = createSelector(
  getCatsFeatureState,
  (state) => state.isLoading
);

export const getFilteredCats = createSelector(
  getCats,
  getFilterString,
  (cats, filterString) => filter(filterString, cats)
);

export const getFilteredCatsViewModel = createSelector(
  getFilteredCats,
  getFilterString,
  getCatsCount,
  getIsDataLoading,
  (cats, filterString, catsCount, isLoading) => ({
    cats,
    filterString,
    catsCount,
    isLoading,
    isListShown: cats.length || isLoading
  })
);

function filter(input: string, itemList: ViewCat[]): ViewCat[] {
  input = input.toLowerCase();
  itemList = itemList.filter(
    (e) =>
      e.breedName.toLowerCase().includes(input) ||
      e.breedDescription.toLowerCase().includes(input) ||
      e.breedTemperament.toLowerCase().includes(input)
  );
  return itemList;
}
