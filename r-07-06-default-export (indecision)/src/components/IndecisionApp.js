import React from 'react'

import AddOption from './AddOption'
import Options from './Options'
import Header from './Header'
import Action from './Action'

import OptionModal from './OptionModal'



class IndecisionApp extends React.Component {
    state = {
        // options: ['Thing 1', 'Thing 2', 'Thing 3']
        // options: props.options   <-- doesn't work outside of a constructor
        options: [],
        selectedOption: undefined
    }

    handleClearSelectedOption = () => {
        this.setState( () => ({ selectedOption: undefined }) )
    }
    
    // To return an object, wrap the {} in ()
    handleDeleteOptions = () => {
        this.setState( () => ({ options: [] }))
    }

    handlePick = () => {
        const randomNum = Math.floor( Math.random() * this.state.options.length )
        const option = this.state.options[randomNum]
        this.setState( () => ({ selectedOption: option }) )
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState( (prevState) => ({
            options: [ ...prevState.options, option]
        }))
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState( (prevState) => {
            return {
                options: prevState.options.filter( (option) => option != optionToRemove )
            }
        })
    }

    componentDidMount() {
        console.log('fetching data')
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if (options) {
                this.setState( () => ({ options: options }))
            }
        } catch (error) {
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            console.log('saving data')
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('options', json)
        }
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <div className="container">
                    <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                    <div className="widget">
                        <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                        <AddOption handleAddOption={this.handleAddOption} />
                    </div>
                    <OptionModal selectedOption={this.state.selectedOption} handleClearSelectedOption={this.handleClearSelectedOption} />
                </div>
            </div>
        )
    }

}
// SPECIAL PRE-SET WORDING - ALSO WORKS FOR FUNCTIONAL STATELESS COMPONENTS
IndecisionApp.defaultProps = {
    options: []
}




// Stateless functional components
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     )
// }




// Since we added "transform-class-properties" plugin for babel, we can use the arrow function syntax for class methods, and define properties
// class OldSyntax {
//     constructor() {
//         this.name = 'Mike'
//         this.handleStuff = this.handleStuff.bind(this)
//     }
//     handleStuff() {
//         this.name = 'John'
//     }
// }
// class NewSyntax {
//     name = 'Jen'
//     handleStuff = () => {
//         this.name = 'Mary'
//     }
// }




// const Layout = (props) => {
//     return (
//         <div>
//             <p>Header</p>
//             {props.children}
//             <p>Footer</p>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Layout>Hello</Layout>,
//     document.getElementById('app')
// )



export default IndecisionApp
