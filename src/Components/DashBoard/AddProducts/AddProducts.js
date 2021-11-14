import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import { Container, Form, Button, Alert } from 'react-bootstrap';

const AddProducts = () => {
    const [productData, setProductData] = useState({})
    const [addConfirmed, setAddConfirmed] = useState(false)


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...productData }
        newData[field] = value
        setProductData(newData)
        console.log(field, value, productData);
    }

    const handleSubmit = (e) => {
        const products = {
            ...productData
        }
        fetch('http://localhost:5000/products', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(products)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setAddConfirmed(true)
                }
            })
        e.preventDefault()

    }
    return (
        <div>

            <h1 className="fw-bold my-5 text-center">Add Products</h1>
            {
                addConfirmed && <Alert variant="success">
                    <FontAwesomeIcon icon={faCheckCircle} /> New Product Added successfully !
                </Alert>
            }
            <Container className="w-50 ">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Model Name</Form.Label>
                        <Form.Control
                            onChange={handleOnChange}
                            type="text"
                            name="name"
                            placeholder="Enter Model Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Descriptions</Form.Label>
                        <Form.Control
                            onChange={handleOnChange}
                            name="description"
                            as="textarea"
                            rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price</Form.Label>
                        <Form.Control
                            onChange={handleOnChange}
                            type="number"
                            name="price"
                            placeholder="Enter Price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            onChange={handleOnChange}
                            type="text"
                            name="imgUrl"
                            placeholder="Image Link" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>

        </div>
    );
};

export default AddProducts;