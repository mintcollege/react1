import './assets/styles.css'
import WhoToFollow from "./components/Whotofollow";
import Header from "./components/Header";
import {Copyright, AllRights as HeyComp} from "./components/Footer";
import {Image, FavFood} from "./components/Assets";
import {useEffect, useState} from "react";


function App() {
    const usernames = [
        {
            id: 1,
            fullname: 'Mike Myers',
            username: 'mike',
            url: 'http://mike.com'
        }
    ]
    const [name, setName] = useState('Jim')
    const [counter, setthecounter] = useState(0)
    const [user, setUser] = useState({
        name: 'Sarah',
        gender: 'female',
        school: 'MINT',
        course: 'CSIT'
    })
    const [stock, setStock] = useState(10)

    useEffect(() => {
        console.log('My application has loaded.')
        // Contact the database and check how much stock you have left
        const fromdb = 12
        setStock(fromdb)
    }, [])
    useEffect(() => {
        console.log(counter)
    }, [counter, user])
    useEffect(() => {
        console.log('Run a different set of code when user changes')
    }, [user])

    const buyItems = (howmany) => {
        if(howmany > stock) {
            console.log('You cannot buy more than the existing stock.')
        }
        else {
            setStock(stock - howmany)
        }
    }

    const name_changer = () => {
        console.log('This function was called.')
        setName('Michael')
        // name = 'Michael'
    }

    const updateCounter = () => {
        if(counter < 5) {
            setthecounter(counter + 1)
        }
    }

    const updateUser = () => {
        setUser({
            ...user,
            course: 'Management'
        })
    }

    const [form, setForm] = useState({})
    const handleInput = (e) => {
        let numinput = parseInt(e.target.value && e.target.value || 0)
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
        // console.log(form)
        // setForm(numinput)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // console.log('Form is ready to send your data')
        // console.log(`Current value of form is ${form}.`)
        // console.log(typeof form)
        console.log(form)
        // Send data to the db
        // alert(form.email)
        // Pass the new data to a child component

        // buyItems(form)
    }

    return (
        <div className="App">
            <div className={'followlist'}>
                <Header />

                <section>
                    <h3>How many do you want to buy?</h3>
                    <h2>{stock}</h2>
                    <form onSubmit={onSubmit}>
                        <input type="text" value={form.buy} name={'buy'} placeholder={'Type a number.'} onChange={handleInput} />
                        <input type="text" value={form.age} name={'age'} placeholder={'What is your age?'} onChange={handleInput} />
                        <input type="text" value={form.email} name={'email'} placeholder={'What is your email?'} onChange={handleInput} />
                        <input type="text" value={form.country} name={'country'} placeholder={'What is your country?'} onChange={handleInput} />
                        {stock === 0 ? (
                            <button disabled>Buy items</button>
                        ) : (
                            <button type={'submit'}>Buy items</button>
                        )}
                    </form>
                </section>

                <section>
                    <h3>Click to increment the number</h3>sublssublsubl
                    <h1>{counter}</h1>
                    <div><button onClick={updateCounter}>Increment counter</button></div>
                </section>
                <section>
                    <h3>Update user data</h3>
                    <p>Name: {user.name}</p>
                    <p>Course: {user.course}</p>
                    <div><button onClick={updateUser}>Change course</button></div>
                </section>
                <br/><br/>
                <Copyright counter={counter} increment={setthecounter} />
                <HeyComp />
            </div>
        </div>
    );
}

export default App;
