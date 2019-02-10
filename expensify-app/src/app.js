import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import configureStore from './store/configureStore'
import AppRouter from './routers/AppRouter'
import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import getVisibleExpenses from './actions/expenses'

import 'normalize.css/normalize.css'
import './styles/styles.scss'



const store = configureStore()

store.dispatch( addExpense({ description:'Water bill', amount: 4500 }) )
store.dispatch( addExpense({ description:'Gas bill', amount: 19900, createdAt: 1000 }) )
store.dispatch( addExpense({ description:'Rent', amount: 109500 }) )


const state = store.getState()
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)
// console.log(visibleExpenses)

console.log(store.getState())


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)


ReactDOM.render(
    jsx,
    document.getElementById('app')
)