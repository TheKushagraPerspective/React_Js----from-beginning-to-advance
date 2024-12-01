import React, { useState } from 'react';

const FormValidation1 = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});

    const handleOnInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const newError = {};

        // Name Validation
        if (!formData.name) {
            newError.name = "Name is required";
        } else if (formData.name.length < 3) {
            newError.name = "Name must be at least 3 characters long";
        } else if (/\d/.test(formData.name)) {
            newError.name = "Name cannot contain numbers";
        }

        // Email Validation
        if (!formData.email) {
            newError.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newError.email = "Invalid email address";
        }

        // Password Validation
        if (!formData.password) {
            newError.password = "Password is required";
        } else if (formData.password.length < 6) {
            newError.password = "Password must be at least 6 characters long";
        } else if (formData.password.length > 12) {
            newError.password = "Password should not be greater than 12 character length";
        } else if (!/[0-9]/.test(formData.password)) {
            newError.password = "Password must contain at least one number";
        } else if (!/[!@#$%^&*]/.test(formData.password)) {
            newError.password =
                "Password must contain at least one special character (!@#$%^&*)";
        }

        if (Object.keys(newError).length > 0) {
            setErrors(newError);
        } else {
            alert("Successfully submitted the form");
            setErrors({});
        }
    };

    return (
        <>
            <h1>Form Validation</h1>
            <form action="#" onSubmit={handleOnSubmit}>
                {/* Name Field */}
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleOnInputChange}
                />
                {errors.name ? <p style={{ color: 'red' }}>{errors.name}</p> : null}
                <br />

                {/* Email Field */}
                <label htmlFor="email">Email:</label><br />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleOnInputChange}
                />
                {errors.email ? <p style={{ color: 'red' }}>{errors.email}</p> : null}
                <br />

                {/* Password Field */}
                <label htmlFor="password">Password:</label><br />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleOnInputChange}
                />
                {errors.password ? (
                    <p style={{ color: 'red' }}>{errors.password}</p>
                ) : null}
                <br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default FormValidation1;
