console.log('utils.js is running');

import validator from 'validator'

import React from 'react'
import ReactDOM from 'react-dom'

const template = <p>Testing 123!</p>

ReactDOM.render(
    template,
    document.getElementById('app')
)
