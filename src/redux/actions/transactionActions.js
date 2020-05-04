import * as actionTypes from "./actionTypes";

export function deleteTransaction(id) {
 return {
  type: actionTypes.DELETE_TRANSACTION,
  payload: id,
 };
}

export function addTransaction(transaction){
  return{
    type: actionTypes.ADD_TRANSACTION,
    payload: transaction
  }
}