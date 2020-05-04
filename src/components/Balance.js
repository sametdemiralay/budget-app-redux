import React, { Component } from 'react'
import {connect} from 'react-redux'

class Balance extends Component {
  render() {
    const amounts = this.props.transactions.map(val => val.amount)
    const total = amounts.reduce((ilk, item) => (ilk += item), 0).toFixed(2)
    return (
      <>
     <h4>Your Balance</h4>
     <h1>${total}</h1>
    </>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    transactions: state.transactionReducer
  }
}

export default connect(mapStateToProps)(Balance)
