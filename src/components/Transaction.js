
import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as transactionActions from "../redux/actions/transactionActions";

class Transaction extends Component {
  deleteTransaction(transaction) {
  this.props.actions.deleteTransaction(transaction)
 }

 render() {
  const sign = this.props.transaction.amount < 0 ? "-" : "+";
  return (
   <li className={this.props.transaction.amount < 0 ? "minus" : "plus"}>
    {this.props.transaction.text}
    <span>
     {sign}${Math.abs(this.props.transaction.amount)}
    </span>
    <button
     onClick={() => this.deleteTransaction(this.props.transaction.id)}
     className="delete-btn"
    >
     X
    </button>
   </li>
  );
 }
}

function mapStateToProps(state){
  return{
    transactions: state.transactionReducer
  }
}

function mapDispatchToProps(dispatch) {
 return {
  actions: {
    deleteTransaction: bindActionCreators(
    transactionActions.deleteTransaction,
    dispatch
   ),
  },
 };
}

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);