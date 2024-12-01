import React, { useState } from 'react';

const PostForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const [errors, setErrors] = useState({});

  const handleOnChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // Perform the POST request
    fetch('http://localhost:5000/api/sign_in', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to sign in');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        alert('User signed in successfully');
      })
      .catch((error) => {
        console.error(error);
        alert('Error signing in');
      });
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleOnChangeInput}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleOnChangeInput}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PostForm;
