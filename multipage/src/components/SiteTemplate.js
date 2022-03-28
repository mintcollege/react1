import {NavLink, Link} from "react-router-dom";
import {useState} from "react";
import useStore from "./store";



const SiteTemplate = props => {
    const auth = useStore(state => state.auth)

    return (
        <>
            <header id="header">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    {auth && (
                        <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    )}
                    <li><NavLink to="/contact">Contact</NavLink></li>
                    {auth ? (
                        <li><NavLink to="/account/logout">Logout</NavLink></li>
                    ) : (
                        <li><NavLink to="/account/login">Login</NavLink></li>
                    )}
                </ul>
            </header>
            <main>
                {props.children}
            </main>
            <footer id="footer">Copyright 2022. All Rights Reserved.</footer>
        </>
    )
}

export default SiteTemplate