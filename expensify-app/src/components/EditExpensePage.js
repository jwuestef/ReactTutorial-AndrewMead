import React from 'react'
import { connect } from 'react-redux'

import ExpenseForm from './ExpenseForm'
import { editExpense, removeExpense } from '../actions/expenses'



const EditExpensePage = (props) => {
    return (
        <div>
            <h1>Edit Expense</h1>
            <ExpenseForm 
                onSubmit={ (expense) => {
                    props.dispatch( editExpense(props.expense.id, expense) )
                    props.history.push('/')
                }}
                expense={props.expense}
            />
            <button onClick={ () => {
                props.dispatch( removeExpense({ id: props.expense.id }) )
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}



const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find( expense => {
            return expense.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditExpensePage)
