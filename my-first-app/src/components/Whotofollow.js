import React from 'react'


const WhoToFollow = (props) => {
    return (
        <div className={'whotofollow'}>
            <h4>{props.fullname}</h4>
            <p>@{props.username}</p>
            <a href={props.url}><strong>Follow</strong></a>
        </div>
    )
}




export default WhoToFollow