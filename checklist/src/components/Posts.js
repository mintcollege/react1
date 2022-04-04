import { useEffect, useState } from "react"
import axios from "axios"

const Posts = param => {
    const [posts, setPosts] = useState([])

    // Asychronous vs. Synchronous programming
    useEffect(async () => {
        // REST API
        // Any code in here runs once and only once and
        // only in the beginning
        // API: https://jsonplaceholder.typicode.com/posts/1

        // const data = {
        //     username: 'aaa',
        //     password: 'bbb'
        // }
        // await axios.post('https://jsonplaceholder.typicode.com/register', data)

        await axios.get('https://jsonplaceholder.typicode.com/albums/1/photos/')
            .then(res => {
                console.log(res.status)
                // 200, 201, 301, 302, 400, 401, 404, 500
                if(res.status === 200) {
                    setPosts(res.data)
                    // Do something
                }
                else {
                    console.log('Nope not successful')
                }
            })
            .catch(err => {
                console.log(err)
            })
        // GET, POST, PUT, PATCH, etc.

    }, [])

    return (
        <>
            <h1>New Posts</h1>
            <ul>
                {posts.map(item => {
                    return (
                        <li key={item.id} id={`image-${item.id}`}>
                            <h4>{item.title}</h4>
                            <div>
                                <a href={item.url}>
                                    <img src={item.thumbnailUrl} title={item.title} />
                                </a>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Posts