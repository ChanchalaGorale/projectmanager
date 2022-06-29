import { boardType } from "../type";

export const initialState = {
  board: {},
  loader: false,
};

export function boardReducer(state = initialState, action) {
  switch (action.type) {
    case boardType.BOARD_LOADER:
      return {
        ...state,
        loader: action.data,
      };
    case boardType.BOARD_DATA:
      return {
        ...state,
        board: action.data,
      };
    default: {
      return {
        ...state,
      };
    }
  }
}
