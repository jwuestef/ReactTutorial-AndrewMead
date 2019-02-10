console.log('App.js is running!')


// JSX - JavaScript XML
const app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
}

let showDetails = false


const onFormSubmit = (e) => {
    e.preventDefault()
    const option = e.target.elements.option.value
    if (option && !app.options.includes(option)) {
        app.options.push(option)
    }
    e.target.elements.option.value = ''
    render()
}

const removeAll = (e) => {
    e.preventDefault()
    app.options = []
    render()
}

const renderArray = () => {
    return app.options.map( option => <li key={option}>{option}</li> )
}


const onMakeDecision = () => {
    const randomNum = Math.floor( Math.random() * app.options.length )
    const option = app.options[randomNum]
    alert(option)
}


const onDetailsClick = (e) => {
    e.preventDefault()
    showDetails = !showDetails
    render()
}



const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            { app.subtitle && <p>{app.subtitle}</p> }
            <span>{app.options.length > 0 ? 'Here are your options: ' : 'No options'}</span>{ app.options.length > 0 ? <button onClick={removeAll}>Remove All</button> : undefined }
            <ol>
                {renderArray()}
            </ol>
            <form action="" onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <br/>
            <br/>
            <button onClick={onDetailsClick}>{ !showDetails ? 'Show' : 'Hide'} Details</button>
            { showDetails ? <p>These are some secret details</p> : undefined }
        </div>
    )

    ReactDOM.render(
        template,
        appRoot
    )
}



const appRoot = document.getElementById('app')



render()
