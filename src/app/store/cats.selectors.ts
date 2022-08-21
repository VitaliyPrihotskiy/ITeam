import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ViewCat } from '../models/cats.model';
import { CatsState, CATS_FEATURE_KEY } from './cats.reducer';
import { PageEvent } from '@angular/material/paginator';

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

function filter(input: string, itemList: ViewCat[], pageEvent: PageEvent): ViewCat[] {
  input = input.toLowerCase();
  itemList = itemList.filter(
    (e) =>
      e.breedName.toLowerCase().includes(input) ||
      e.breedDescription.toLowerCase().includes(input) ||
      e.breedTemperament.toLowerCase().includes(input)
  );
  if (pageEvent) {
    const startIndex = pageEvent.pageIndex * pageEvent.pageSize;
  let endIndex  = startIndex +pageEvent.pageSize;
  if (endIndex>itemList.length){
    endIndex=itemList.length
  }
    itemList = itemList.slice(startIndex, endIndex);
  }
  return itemList;
}
