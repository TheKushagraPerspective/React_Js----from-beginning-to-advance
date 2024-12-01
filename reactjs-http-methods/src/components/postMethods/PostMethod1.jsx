import React, { useState, useEffect } from 'react';

const PostMethod1 = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const newUserData = {
      id: 1,
      name: 'Dummy name',
      email: 'dummy@example.com',
      address: {
        city: 'DummyState',
      },
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Adding Content-Type header
      },
      body: JSON.stringify(newUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // This will show the created user data
        setResponseMessage('User Created Successfully');
        setError('');
      })
      .catch(() => {
        setError('Error in creating the new user');
        setResponseMessage('');
      });
  }, []);

  return (
    <>
      <h2>Create User</h2>
      {responseMessage ? <p style={{ color: 'green' }}>{responseMessage}</p> : null}
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </>
  );
};

export default PostMethod1;
