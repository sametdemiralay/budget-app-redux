import React, { Component } from "react";

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as transactionActions from '../redux/actions/transactionActions'

class AddTransaction extends Component {
 state = {
  text: "",
  amount: 0,
 };

 render() {
  const onSubmit = (e) => {
   e.preventDefault();

   const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text: this.state.text,
    amount: parseInt(this.state.amount),
   };

   this.props.addTransaction(newTransaction)
  };
  return (
   <>
    <h3>Add new transaction</h3>
    <form onSubmit={onSubmit}>
     <div className="form-control">
      <label htmlFor="text">Text</label>
      <input
       type="text"
       value={this.state.text}
       onChange={(e) => this.setState({ text: e.target.value })}
       placeholder="Enter text..."
      />
     </div>
     <div className="form-control">
      <label htmlFor="amount">
       Amount <br />
       (negative - expense, positive - income)
      </label>
      <input
       type="number"
       value={this.state.amount}
       onChange={(e) => this.setState({ amount: e.target.value })}
       placeholder="Enter amount..."
      />
     </div>
     <button className="btn">Add transaction</button>
    </form>
   </>
  );
 }
}

function mapStateToProps(state){
  return{
    transactions: state.transactionReducer
  }
}

function mapDispatchToProps(dispatch){
  return{
    addTransaction: bindActionCreators(transactionActions.addTransaction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTransaction)