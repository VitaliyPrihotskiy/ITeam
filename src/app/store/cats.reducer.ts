import { Action, createReducer, on } from "@ngrx/store";
import { DEFAULT_PAGE_SIZE } from "../constants/cats.constants";
import { ViewCat } from "../models/view-cat.model";
import {
    loadCats,
    loadCatsFailure,
    loadCatsSuccess,
    setFilterString,
    setPaginationData,
} from "./cats.action";

export const CATS_FEATURE_KEY = 'cats';

export interface CatsState {
    cats: ViewCat[];
    isLoading: boolean;
    error: unknown;
    filterString: string;
    currentPage: number;
    pageSize: number,
    catsCount: number,
}

const initialState: CatsState = {
    cats: [],
    isLoading: false,
    error: null,
    filterString: '',
    currentPage: 0,
    pageSize: DEFAULT_PAGE_SIZE,
    catsCount: 0,
};

const catsReducer = createReducer(
    initialState,
    on(loadCats, (state) => ({
        ...state,
        isLoading: true,
    })),
    on(loadCatsSuccess, (state, { catsData }) => ({
        ...state,
        cats: catsData.cats,
        catsCount: catsData.catsCount,
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

    on(setPaginationData, (state, { pageSize, currentPage }) => ({
        ...state,
        pageSize,
        currentPage
    })),
)

export function reducer(state: CatsState, action: Action) {
    return catsReducer(state, action);
}
