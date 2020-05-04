import React, { Component } from "react";
import { connect } from "react-redux";

class IncomeExpenses extends Component {
 render() {
  const amounts = this.props.transactions.map((val) => val.amount);

  const income = amounts
   .filter((item) => item > 0)
   .reduce((ilk, item) => (ilk += item), 0)
   .toFixed(2);

  const expense =
   amounts
    .filter((item) => item < 0)
    .reduce((ilk, item) => (ilk += item), 0) * (-1).toFixed(2);

  return (
   <div>
    <div className="inc-exp-container">
     <div>
      <h4>Income</h4>
      <p className="money plus">+${income}</p>
     </div>
     <div>
      <h4>Expense</h4>
      <p className="money minus">-${expense}</p>
     </div>
    </div>
   </div>
  );
 }
}

const mapStateToProps = (state) => {
 return {
  transactions: state.transactionReducer,
 };
};

export default connect(mapStateToProps)(IncomeExpenses);
