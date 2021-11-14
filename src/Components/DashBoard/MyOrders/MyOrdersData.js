import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MyOrdersData = (props) => {
    const {_id, Model, Brand, Price, address,status} = props.order

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to delete this order?")
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        window.alert("Deleted Successfully")
                        window.location.reload(false);


                    }
                })

        }

    }
    return (
        <div>
            <Card>
            <Card.Body>
                <Card.Title>Model: {Model}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Brand: {Brand}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Price: $ {Price}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Address: {address}</Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">Status: {status}</Card.Subtitle>

                <Button onClick={() => handleDelete(_id)}>Delete</Button>
            </Card.Body>
            </Card>

        </div>
    );
};

export default MyOrdersData;