import initialState from "./initialState";
import * as actionTypes from "../actions/actionTypes";

export default function transactionReducer(
 state = initialState.transaction,
 action
) {
 switch (action.type) {
  case actionTypes.DELETE_TRANSACTION:
   let deger = state.filter((val) => val.id !== action.payload);
   return deger;

  case actionTypes.ADD_TRANSACTION:
   let deger2 = [...state, action.payload];
   return deger2;
  default:
   return state;
 }
}
