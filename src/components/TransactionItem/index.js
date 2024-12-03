// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteHistoryItem} = props
  const {id, title, amount, type} = transactionDetails
  // const {title, amount, type} = transactionDetails

  const onClickDeleteHistoryItem = () => {
    onDeleteHistoryItem(id)
  }

  return (
    <li className="list-item">
      <p className="text">{title}</p>
      <p className="text">RS {amount}</p>
      <p className="text">{type}</p>

      <button
        className="delete-button"
        data-testid="delete"
        onClick={onClickDeleteHistoryItem}
      >
        <img
          className="delete-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransactionItem
