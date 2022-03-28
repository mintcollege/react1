import React from 'react'



const Footer = () => {
    return (
        <footer id={'footer'}>This is the footer.</footer>
    )
}

const Copyright = (props) => {
    return (
        <>
            <button onClick={() => props.increment(props.counter + 1)}>Click to increment parent state: Current state is {props.counter}</button>
            <p>Copyright &copy; 2022</p>
        </>
    )
}

const AllRights = () => {
    return <p>All rights reserved.</p>
}


export {Copyright, AllRights}
// export default Footer