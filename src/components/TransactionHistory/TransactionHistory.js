import React from "react"
import PropTypes from "prop-types"
import TransactionHistoryItem from "./TransactionHistoryItem/TransactionHistoryItem"
import style from "./TransactionHistory.module.css"

const TransactionHistory = ({ items }) => {
  return (
    <div>
      {
        <table className={style.transactionHistory}>
          <thead>
            <tr>
              <th>Type</th>
              <th>Amount</th>
              <th>Currency</th>
            </tr>
          </thead>

          <tbody>
            {items.map((item) => (
              <TransactionHistoryItem key={item.id} type={item.type} amount={item.amount} currency={item.currency} />
            ))}
          </tbody>
        </table>
      }
    </div>
  )
}

TransactionHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
}

export default TransactionHistory
