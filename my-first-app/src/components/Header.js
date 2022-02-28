import React from 'react'


const Header = (props) => {
    return (
        <div id={'header'}>
            <header>
                <ul>
                    <li>Welcome, {props.username}</li>
                    <li>{props.username} is logged in: {props.login}</li>
                </ul>
            </header>
            <p>Hello</p>
        </div>
    )
}


export default Header