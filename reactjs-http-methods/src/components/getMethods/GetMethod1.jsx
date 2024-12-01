import React, { useState, useEffect } from 'react';

const GetMethod1 = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    // Explicitly specifying the GET method if not specifying then bydefault the method will be get method
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => {
        console.log(json);
        setUser(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <ul>
        {user.map((item, index) => (
          <li key={index}>
            {item.id} - {item.name} - {item.address.street}, {item.address.suite},{" "}
            {item.address.city}, {item.address.zipcode}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GetMethod1;
