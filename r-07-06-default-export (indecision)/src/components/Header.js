import React from 'react'


const Header = (props) => (
    <div className="header">
        <div className="container">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle ? <h2 className="header__subtitle">{props.subtitle}</h2> : undefined }
        </div>
    </div>
)

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

export default Header
