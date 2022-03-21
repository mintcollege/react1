import {useState} from "react";
import useStore from "./store";


const HomePage = props => {
    return (
        <>
            <h1>Home Page</h1>
        </>
    )
}

const PortfolioPage = props => {
    return (
        <>
            <h1>Portfolio Page</h1>
        </>
    )
}

const ContactPage = props => {
    const [state, setState] = useState(123)
    console.log(props.num)  // 12
    console.log(props.name) // Peter Parker
    return (
        <>
            <h1>Contact Page</h1>
        </>
    )
}

const LoginPage = props => {
    const [auth, username, setAuth] = useStore(state => [
        state.auth, state.username, state.setAuth
    ])

    const login = () => {
        setAuth(true)
    }

    const logout = () => {
        setAuth(false)
    }

    return (
        <>
            {auth && (
                <p>Your name is {username}.</p>
            )}
            {auth ? (
                <p>You are signed in.</p>
            ) : (
                <p>You need to sign in first.</p>
            )}
            <h1>Login Page</h1>
            {!auth ? (
                <button onClick={login}>Login now</button>
            ) : (
                <button onClick={logout}>Logout now</button>
            )}
        </>
    )
}

const LogoutPage = props => {
    return (
        <>
            <h1>Logout Page</h1>
        </>
    )
}


export {PortfolioPage, ContactPage, LoginPage, LogoutPage}
export default HomePage
