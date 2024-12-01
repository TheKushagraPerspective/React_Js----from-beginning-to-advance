import React, { useEffect, useState } from 'react'
import axios from 'axios'

const GetMethod2 = () => {

    const [users , setUsers] = useState([])

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response => setUsers(response.data))
        .catch((err) => {
            console.log(err);
        })
    })


  return (
    <>
        <h1>User Data Fetched using Axios</h1>

        <ul>
            {users.map((item , index) => (
                <li key={index}>
                    {item.id} - {item.name} - {item.address.city}
                    </li>
            ))}
        </ul>
    </>
  )
}

export default GetMethod2
