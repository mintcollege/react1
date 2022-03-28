import {useEffect, useState} from "react";

/**
 * 1. Get the data
 * 2. Add the data to the end of the array
 * 3. Clear the previous data
 * 4. Did you change the id of each new item?
 */

export const ChecklistPage = props => {
    const [addme, setAddme] = useState('')
    const [checklist, setChecklist] = useState([
        {
            checklist: 'Monitoring software',
            id: 1,
            done: false
        },
        {
            checklist: 'Set up timer for customers',
            id: 2,
            done: false
        },
        {
            checklist: 'Members list',
            id: 3,
            done: false
        },
    ]);
    useEffect(() => {
        const tmp = []
        checklist.forEach(item => {
            tmp[item.id] = item
        })
    }, [])

    const [id, setId] = useState(3)

    const btnHandler = e => {
        e.preventDefault()
        const newid = id + 1
        setId(newid)
        const newitem = {
            checklist: addme,
            id: newid,
            done: false
        }
        const tmparr = []
        checklist.forEach(item => {
            tmparr[item.id] = item
        })
        tmparr[newid] = newitem
        // // Append to end of array
        setChecklist(tmparr)
        setAddme('')
    }

    const textHandler = e => {
        setAddme(e.target.value)
    }

    const markAsDone = id => {
        const tmparr = []
        checklist.forEach(item => {
            if(item.id !== id) {
                tmparr[item.id] = item
            }
        })
        setChecklist(tmparr)
    }

    return (
        <>
            <h1>Checklist goes here</h1>
            <form>
                <div>
                    <input type="text" name={'additive'} placeholder={'Add something'} onChange={textHandler} value={addme} />
                    <button onClick={btnHandler}>Add item</button>
                </div>
                <ul>
                    {checklist.map(item => {
                        return (
                            <li key={item.id}>
                                <input type="button" value={'Done'}
                                       onClick={() => markAsDone(item.id)} /> {item.checklist}
                            </li>
                        )
                    })}
                </ul>
            </form>
        </>
    )
}


export const AboutPage = props => {
    return (
        <>
            <main>
                <h1>About page</h1>
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>
            </main>
        </>
    )
}