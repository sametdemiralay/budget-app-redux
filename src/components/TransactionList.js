import React, { Component } from "react";
import { connect } from "react-redux";
import Transaction from "./Transaction";

class TransactionList extends Component {
 render() {
  return (
   <>
    <h3>History</h3>
    <ul className="list">
     {this.props.transactions.map((item) => (
      <Transaction key={item.id} transaction={item} />
     ))}
    </ul>
   </>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  transactions: state.transactionReducer,
 };
};

export default connect(mapStateToProps)(TransactionList);
