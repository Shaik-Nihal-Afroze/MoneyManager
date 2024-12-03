import './index.css'

const MoneyDetails = props => {
  const {totalBalance, totalIncome, totalExpenses} = props
  return (
    <ul className="sections-container">
      <li className="list-container balance-section-container">
        <img
          className="balance-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="details-container">
          <p className="balance">Your Balance</p>
          <p className="balance-amount" data-testid="balanceAmount">
            RS {totalBalance}
          </p>
        </div>
      </li>
      <li className="list-container income-section-container">
        <img
          className="balance-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="details-container">
          <p className="balance">Your Income</p>
          <p className="balance-amount" data-testid="incomeAmount">
            RS {totalIncome}
          </p>
        </div>
      </li>
      <li className="list-container expenses-section-container">
        <img
          className="balance-icon"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="details-container">
          <p className="balance">Your Expenses</p>
          <p className="balance-amount" data-testid="expensesAmount">
            RS {totalExpenses}
          </p>
        </div>
      </li>
    </ul>
  )
}

export default MoneyDetails
