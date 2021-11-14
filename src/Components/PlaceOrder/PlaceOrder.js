import React, { useEffect, useState } from 'react';
import { Form, Button, Container, Col, Row, Alert } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PlaceOrder = () => {
    const [details, setDetails] = useState({})
    const { _id } = useParams();
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, address: '', city: '', zip: '' }
    const [ordersInfo, setOrdersInfo] = useState({})
    const [orderConfirmed, setOrderConfirmed] = useState(false)
    // console.log(user);


    useEffect(() => {
        fetch(`http://localhost:5000/products/${_id}`)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [_id])


    const hanldeOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...ordersInfo };
        newInfo[field] = value;
        setOrdersInfo(newInfo);
        // console.log(newInfo);


    }


    const handleOrderSubmit = e => {
        alert("Submit successful")
        //Collect Data
        const order = {
            ...ordersInfo,
            name: initialInfo.name,
            email: initialInfo.email,
            Model: details.name,
            Price: details.price,
            status: "pending"

        }
        console.log(order);
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setOrderConfirmed(true)
                }
            })
        e.preventDefault();
    }

    return (
        <div>
            <h1 className="fw-bold my-5 text-center">PlaceOrder</h1>
            {
                orderConfirmed && <Alert variant="success">
                    <FontAwesomeIcon icon={faCheckCircle} /> Order Confirem successfully !
                </Alert>
            }
            <Container className="w-50">

                <Form onSubmit={handleOrderSubmit}>
                    <Row className="mb-3" xs={1} md={2}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                onBlur={hanldeOnBlur}
                                placeholder="Your Name"
                                defaultValue={user.displayName} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                name="email"
                                onBlur={hanldeOnBlur}
                                placeholder="Enter Email"
                                defaultValue={user.email} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3" xs={1} md={2}>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Products</Form.Label>
                            <Form.Control type="text"
                                disabled
                                placeholder="Model"
                                defaultValue={details.name} />
                        </Form.Group>
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                disabled
                                type="text"
                                placeholder="Price"
                                defaultValue={details.price} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control
                            name="address"
                            onBlur={hanldeOnBlur}
                            placeholder="Your Address" />
                    </Form.Group>

                    <Row className="mb-3" xs={1} md={2} >
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                name="city"
                                onBlur={hanldeOnBlur} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control
                                onBlur={hanldeOnBlur}
                                name="zip" />
                        </Form.Group>
                    </Row>

                    <Button variant="primary" type="submit">
                        Confirm
                    </Button>
                </Form>

            </Container>
        </div>
    );
};

export default PlaceOrder;