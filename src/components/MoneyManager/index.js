import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionsHistoryList: [],
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const optionType = transactionTypeOptions.find(
      each => each.optionId === type,
    )
    const {displayText} = optionType
    const newTransactionHistory = {
      id: uuidv4(),
      title,
      amount: parseInt(amount),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionsHistoryList: [
        ...prevState.transactionsHistoryList,
        newTransactionHistory,
      ],
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    this.setState({type: event.target.value})
  }

  onChangeTotalExpences = () => {
    const {transactionsHistoryList} = this.state
    let totalExpenses = 0
    transactionsHistoryList.forEach(each => {
      if (each.type === transactionTypeOptions[1].displayText) {
        totalExpenses += each.amount
        console.log(totalExpenses)
      }
    })
    return totalExpenses
  }

  onChangeTotalIncome = () => {
    const {transactionsHistoryList} = this.state
    let totalIncome = 0
    transactionsHistoryList.forEach(each => {
      if (each.type === transactionTypeOptions[0].displayText) {
        totalIncome += each.amount
        console.log(totalIncome)
      }
    })
    return totalIncome
  }

  onChangeTotalBalance = () => {
    const {transactionsHistoryList} = this.state
    let totalBalance = 0
    const totalIncome = this.onChangeTotalIncome()
    const totalExpenses = this.onChangeTotalExpences()

    totalBalance = totalIncome - totalExpenses
    // totalBalance = totalIncome
    return totalBalance
  }

  onDeleteHistoryItem = id => {
    const {transactionsHistoryList} = this.state
    const filteredHistoryList = transactionsHistoryList.filter(
      eachHistoryItem => eachHistoryItem.id !== id,
    )
    this.setState({transactionsHistoryList: filteredHistoryList})
  }

  render() {
    const {title, amount, type, transactionsHistoryList} = this.state

    const totalBalance = this.onChangeTotalBalance()
    const totalExpenses = this.onChangeTotalExpences()
    const totalIncome = this.onChangeTotalIncome()
    return (
      <>
        <div className="app-container">
          <div className="name-container">
            <h1 className="title">Hi,Richard</h1>
            <p className="paragraph">
              Welcome back to your <span className="span">Money Manager</span>
            </p>
          </div>
          <div className="moneyDetails-container">
            <MoneyDetails
              totalBalance={totalBalance}
              totalExpenses={totalExpenses}
              totalIncome={totalIncome}
            />
          </div>

          <div className="transactions-and-history-section-container">
            <div className="transactions-container">
              <form className="my-form" onSubmit={this.onClickSubmit}>
                <h1 className="container-title">Add Transaction</h1>
                <div className="label-container">
                  <label className="label" htmlFor="title">
                    Title
                  </label>
                  <input
                    className="input"
                    id="title"
                    placeholder="TITLE"
                    value={title}
                    onChange={this.onChangeTitle}
                  />
                </div>
                <div className="label-container">
                  <label className="label" htmlFor="amount">
                    Amount
                  </label>
                  <input
                    className="input"
                    id="amount"
                    placeholder="AMOUNT"
                    value={amount}
                    onChange={this.onChangeAmount}
                  />
                </div>
                <div className="label-container">
                  <label className="label" htmlFor="select">
                    Type
                  </label>
                  <select
                    className="input"
                    id="select"
                    value={type}
                    onChange={this.onChangeType}
                  >
                    {transactionTypeOptions.map(eachOption => (
                      <option
                        key={eachOption.optionId}
                        className="option"
                        value={eachOption.optionId}
                      >
                        {eachOption.displayText}
                      </option>
                    ))}
                  </select>
                </div>
                <button type="submit" className="add-button">
                  Add
                </button>
              </form>
            </div>
            <div className="history-container">
              <h1 className="container-title">History</h1>
              <div className="unordered-list-container">
                <li className="table-row">
                  <p className="column-name">Title</p>
                  <p className="column-name">Amount</p>
                  <p className="column-name">Type</p>
                  <p className="delete-icon-column"> </p>
                </li>
                <ul className="transactionsHistoryList-ul">
                  {transactionsHistoryList.map(eachItem => (
                    <TransactionItem
                      key={eachItem.id}
                      transactionDetails={eachItem}
                      onDeleteHistoryItem={this.onDeleteHistoryItem}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default MoneyManager

// transactionsHistoryList.forEach(each => {
//   if (each.type === transactionsHistoryList[0].displayText) {
//     totalIncome += each.amount
//   } else {
//     totalIncome -= each.amount
//   }
//   console.log(totalIncome)
//   console.log(totalExpenses)
//   console.log(totalBalance)
// })
