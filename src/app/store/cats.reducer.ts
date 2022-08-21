import { Action, createReducer, on } from "@ngrx/store";
import { Cat } from "../models/cats.model";
import {
    loadCats,
    loadCatsFailure,
    loadCatsSuccess,
    setFilterString,
    setShownCats,
} from "./cats.action";
import { PageEvent } from '@angular/material/paginator';

export const CATS_FEATURE_KEY = 'cats';

export interface CatsState {
    cats: Cat[];
    isLoading: boolean;
    error: unknown;
    filterString: string;
    shownCats:PageEvent;
}

const initialState: CatsState = {
    cats: [],
    isLoading: false,
    error: null,
    filterString: '',
    shownCats:{
        length:25,
        pageIndex:0,
        pageSize:10,
        previousPageIndex:0,
    },
};

const catsReducer = createReducer(
    initialState,
    on(loadCats, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadCatsSuccess, (state, { cats }) => ({
        ...state,
        cats,
        isLoading: false,
        error: null
    })),
    on(loadCatsFailure, (state, { error }) => ({
        ...state,
        error,
        isLoading: false
    })),
    on(setFilterString, (state, { filterString }) => ({
        ...state,
        filterString
    })),
    on(setShownCats, (state, { shownCats }) => ({
        ...state,
        shownCats
    })),
)

export function reducer(state: CatsState, action: Action) {
    return catsReducer(state, action);
}
