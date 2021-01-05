import { combineReducers } from "redux";
import { ReducerForFavourite } from './ReducerForFavourite';
import { ReducerForSearch } from './ReducerForSearch';
export const reducer = combineReducers({ReducerForSearch, ReducerForFavourite})