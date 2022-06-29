import { combineReducers } from "redux";
import { boardReducer, initialState as boardState } from "./board.reducer";

export const rootInitialState = { boardReducer: boardState };
export const rootReducer = combineReducers({ boardReducer });
