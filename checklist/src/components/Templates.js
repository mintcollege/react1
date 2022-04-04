import {NavLink} from "react-router-dom";
import {useStore} from "./store";


const Header = props => {
    const username = useStore(state => state.username)

    return (
        <>
            <header>
                <p><strong>{username}</strong></p>
                <ul>
                    <li><NavLink to={'/checklist'}>Checklist</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/posts'}>Posts</NavLink></li>
                </ul>
            </header>
        </>
    )
}

const Footer = props => {
    const username = useStore(state => state.username)

    return (
        <>
            <footer>
                <p><strong>{username}</strong></p>
                <p>Footer here</p>
            </footer>
        </>
    )
}


export {Header, Footer}