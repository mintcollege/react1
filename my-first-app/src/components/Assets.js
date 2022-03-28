import React from 'react'
import land1 from '../assets/images/land1.jpg'
import land2 from '../assets/images/land2.jpg'
import land3 from '../assets/images/land3.jpg'


const Image = props => {
    /*
    let name = ''
    if(props.show === 1) {
        name = '../assets/images/land1.jpg'
    }
    if(props.show === 1) {
        return <img src={land1} alt={props.details} />
    }
    else if(props.show === 2) {
        return <img src={land2} alt={props.details}/>
    }
    else {
        return <img src={land3} alt={props.details}/>
    }
    */
    // const age = 17
    // if(age < 18) {
    //     console.log('You cannot enter.')
    // }
    // else {
    //     console.log('Enter now')
    // }
    // console.log(age < 18 && 'You cannot enter.' || 'Enter now')

    return (
        <div>
            {props.show === 1 && <img src={land1} alt={props.details} />}
            {props.show === 2 && <img src={land2} alt={props.details} />}
            {props.show === 3 && (
                <img src={land3} alt={props.details} />
            )}
            {props.details && (
                <h4>{props.details}</h4>
            )}
            {props.num > 100 ? (
                <>
                    <p>euiuei</p>
                    <p>euiuei</p>
                    <p>euiuei</p>
                    <p>euiuei</p>
                    <p>euiuei</p>
                </>
            ) : (
                <>
                    {props.artist ? (
                        <p>Made by {props.artist}</p>
                    ) : (
                        <p>Artist unknown</p>
                    )}
                </>
            )}
        </div>
    )
}


const FavFood = () => {
    const food = ['apple', 'banana', 'cake', 'durian']
    console.log(food)

    return (
        <>
            {food.map((val, idx) => {
                return (
                    <p key={idx}>{val}</p>
                )
            })}
        </>
    )
}



export {Image, FavFood}