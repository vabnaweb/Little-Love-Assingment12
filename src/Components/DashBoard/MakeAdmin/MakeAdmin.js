import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Form, Button, Alert, Container } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
                <h1 className="fw-bold my-5 text-center">Make Admin</h1>
                {
                    success && <Alert variant="success">
                        <FontAwesomeIcon icon={faCheckCircle} /> Admin Make Successfully !
                    </Alert>
                }
                <Container className="w-50">
                    <Form className="mb-3" onSubmit={handleAdminSubmit}>
                        <Form.Control
                            onBlur={handleOnBlur}
                            type="email"
                            placeholder="Email"
                        />
                        <Button className="mt-3" type="submit">Make Admin</Button>
                    </Form>

                </Container>

        </div>
    );
};

export default MakeAdmin;