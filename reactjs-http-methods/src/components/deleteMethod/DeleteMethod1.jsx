import React, { useState, useEffect } from 'react';

const DeleteMethod1 = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'DELETE',
    })
      .then((response) => {
        // Check if the response is successful
        if (response.ok) {
          setResponseMessage('User Deleted Successfully');
          setError('');
        } else {
          throw new Error('Error in deleting the user');
        }
      })
      .catch(() => {
        setError('Error in deleting the user data');
        setResponseMessage('');
      });
  }, []);

  return (
    <>
      <h2>Deleting User Data</h2>
      {responseMessage ? <p style={{ color: 'green' }}>{responseMessage}</p> : null}
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </>
  );
};

export default DeleteMethod1;
