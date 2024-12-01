import React, { useState, useEffect } from 'react';

const PutMethod1 = () => {
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');
  const [updatedData, setUpdatedData] = useState(null);  // To store the updated data

  useEffect(() => {
    const updatedUserData = {
      id: 2, // id here refers to the updated data's id; it doesn't affect the PUT request
      name: 'Updated Dummy name',
      email: 'updateddummy@example.com',
      address: {
        city: 'UpdatedDummyState',
      },
    };

    fetch('https://jsonplaceholder.typicode.com/users/1', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Add this header
      },
      body: JSON.stringify(updatedUserData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the updated data for inspection
        setUpdatedData(data); // Store updated data in state
        setResponseMessage('User Updated Successfully');
        setError('');
      })
      .catch(() => {
        setError('Error in updating the user data');
        setResponseMessage('');
      });
  }, []);

  return (
    <>
      <h2>Updating User Data</h2>
      {responseMessage ? <p style={{ color: 'green' }}>{responseMessage}</p> : null}
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
      
      {/* Display the updated user data */}
      {updatedData && (
        <div>
          <h3>Updated User:</h3>
          <pre>{JSON.stringify(updatedData, null, 2)}</pre>
        </div>
      )}
    </>
  );
};

export default PutMethod1;
