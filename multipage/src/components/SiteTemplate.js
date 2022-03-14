import {NavLink, Link} from "react-router-dom";



const SiteTemplate = props => {
    return (
        <>
            <header id="header">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><NavLink to="/portfolio">Portfolio</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
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