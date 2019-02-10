import React from 'react'

const Option = (props) => (
    <div className="option">
        <p className="option__text">{props.count}. {props.optionText}</p>
        <button className="button button--link" onClick={ (e) => props.handleDeleteOption(props.optionText) }>Remove</button>
    </div>
)


// class Option extends React.Component {

//     render() {
//         return (
//             <div>
//                 {this.props.optionText}
//             </div>
//         )
//     }

// }

export default Option
