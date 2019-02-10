
// const user = {
//     name: 'Jeremy',
//     age: 500
//     //location: 'At Work'
// }
// function getLocation(location) {
//     return location ? <p>Location: {location}</p> : undefined
// }
// const templateTwo = (
//     <div>
//         <h1>{user.name ? user.name : 'Anonymous'}</h1>
//         { (user.age && user.age) >= 18 ? <p>Age: {user.age}</p> : undefined }
//         { getLocation(user.location) }
//     </div>
// )







// let count = 0
// const addOne = () => {
//     count++
//     console.log(count)
//     renderCounterApp()
// }
// const minusOne = () => {
//     count--
//     console.log(count)
//     renderCounterApp()
// }
// const reset = () => {
//     count = 0
//     console.log(count)
//     renderCounterApp()
// }

// const appRoot = document.getElementById('app')

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button id="my-id" className="button" onClick={addOne}>+1</button>
//             <button id="my-id" className="button" onClick={minusOne}>-1</button>
//             <button id="my-id" className="button" onClick={reset}>Reset</button>
//         </div>
//     )

//     ReactDOM.render(
//         templateTwo,
//         appRoot
//     )
// }

// renderCounterApp()





class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: props.count
        }
    }
    
    handleAddOne() {
        this.setState( (prevState) => {
            return { count: prevState.count + 1}
        })
    }

    handleMinusOne() {
        this.setState( (prevState) => {
            return { count: prevState.count - 1 }
        })
    }
    handleReset() {
        this.setState({ count: 0 })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}
Counter.defaultProps = {
    count: 0
}
    


ReactDom.render(
    <Counter count={-10} />,
    document.getElementById('app')
)



