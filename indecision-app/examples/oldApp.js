

class IndecisionApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            // options: ['Thing 1', 'Thing 2', 'Thing 3']
            options: props.options
        }
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
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

    // To return an object, wrap the {} in ()
    handleDeleteOptions() {
        this.setState( () => ({ options: [] }))
    }

    handlePick() {
        const randomNum = Math.floor( Math.random() * this.state.options.length )
        const option = this.state.options[randomNum]
        alert(option)
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState( (prevState) => ({
            options: [ ...prevState.options, option]
        }))
    }

    handleDeleteOption(optionToRemove) {
        this.setState( (prevState) => {
            return {
                options: prevState.options.filter( (option) => option != optionToRemove )
            }
        })
    }

    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of a computer'

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} />
                <AddOption handleAddOption={this.handleAddOption} />
            </div>
        )
    }

}
// SPECIAL PRE-SET WORDING - ALSO WORKS FOR FUNCTIONAL STATELESS COMPONENTS
IndecisionApp.defaultProps = {
    options: []
}



const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle ? <h2>{props.subtitle}</h2> : undefined }
        </div>
    )
}
// SPECIAL PRE-SET WORDING - ALSO WORKS FOR CLASS BASED COMPONENTS
Header.defaultProps = {
    title: 'some Default'
}

// class Header extends React.Component {

//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         )
//     }

// }



const Action = (props) => {
    return (
        <div>
            <button disabled={!props.hasOptions} onClick={props.handlePick}>What should I do?</button>
        </div>
    )
}

// class Action extends React.Component {

//     render() {

//         return (
//             <div>
//                 <button disabled={!this.props.hasOptions} onClick={this.props.handlePick}>What should I do?</button>
//             </div>
//         )
//     }

// }



const Options = (props) => {
    return (
        <div>
            Options:
            { props.options.map( option => <Option key={option} optionText={option} handleDeleteOption={props.handleDeleteOption} /> ) }
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 ? <span><br />Please add some data to get started</span> : undefined}
        </div>
    )
}

// class Options extends React.Component {

//     render() {
//         return (
//             <div>
//                 Options:
//                 { this.props.options.map( option => <Option key={option} optionText={option} /> ) }
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             </div>
//         )
//     }

// }



const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick={ (e) => props.handleDeleteOption(props.optionText) }>Remove</button>
        </div>
    )
}

// class Option extends React.Component {

//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }

// }



class AddOption extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            error: undefined
        }
    }

    handleAddOption(e) {
        e.preventDefault()
        const option = e.target.elements.option.value.trim()
        const error = this.props.handleAddOption(option)

        this.setState( () => ({ error }))

        if (!error) {
            e.target.elements.option.value = ''
        }
    }
    
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Submit</button>
                </form>
            </div>
        )
    }

}



// Stateless functional components
const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}




ReactDOM.render(
    <IndecisionApp />,
    document.getElementById('app')
)
