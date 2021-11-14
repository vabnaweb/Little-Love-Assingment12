import React, { useState } from 'react';
import { Container, FloatingLabel, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { NavLink, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const history = useHistory()

    const { user, registerUser, isLoading, error } = useAuth();

    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData }
        newLoginData[field] = value
        setLoginData(newLoginData)
        console.log(field, value, loginData);
    }




    const handleSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Your Password did not matched. Try again");
            return

        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        alert("submited")
        const users = {
            Name: name,
            Email: email
        }
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })

        fetch('http://localhost:5000/users', {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(users)
        })

        e.preventDefault()

    }
    return (
        <div>
            <h1 className="fw-bold my-5 text-center">Registration</h1>
            <Container className="w-50">
                {!isLoading && <form onSubmit={handleSubmit}>

                    <FloatingLabel label="Name" className="mb-3">
                        <Form.Control name="name" onChange={handleOnChange}
                            onBlur={handleName}
                            type="text" placeholder="name" required />
                    </FloatingLabel>

                    <FloatingLabel

                        label="Email address"
                        className="mb-3"
                    >
                        <Form.Control name="email" onChange={handleOnChange}
                            onBlur={handleEmail}
                            type="email" placeholder="name@example.com" required />
                    </FloatingLabel>

                    <FloatingLabel label="Password" className="mb-3">
                        <Form.Control name="password" onChange={handleOnChange} type="password" placeholder="Password" required />
                    </FloatingLabel>

                    <FloatingLabel label="Re-type Password">
                        <Form.Control name="password2" onChange={handleOnChange} type="password" placeholder="Password" required />
                    </FloatingLabel>

                    <Button type="submit" className="mt-3">Register</Button>
                    <NavLink style={{ textDecoration: "none", display: "block" }} to="/login">
                        <Button className="p-0 mt-2 link-style primary" variant="link">
                            Already have an account? Please Log in.
                        </Button>
                    </NavLink>
                </form>}
                {
                    isLoading && <Spinner animation="border" variant="info" />

                }
                {
                    user?.email && <Alert variant="success">
                        Register successfull !
                    </Alert>
                }

                {
                    error && <Alert variant="danger">
                        {error}
                    </Alert>

                }
            </Container>

        </div>
    );
};

export default Register;