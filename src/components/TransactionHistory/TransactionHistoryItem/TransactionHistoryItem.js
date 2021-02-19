import React from "react"
import PropTypes from "prop-types"
import style from "./TransactionHistoryItem.module.css"

const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <tr className={style.main}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  )
}

// TransactionHistoryItem.defaultProps = {
//   type: "qqq",
// }

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
}

export default TransactionHistoryItem
