import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const ManageAllOrdersData = (props) => {
    const {_id, name, email, address, Model, Price, status} = props.orderall;
    const [user, setUser] = useState({})

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure? Do you want to cancel this Order?")
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

    const hanldeApproved = (e) => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    window.alert("Shifted Successfully")
                    window.location.reload(false);

                }
            })

    }
    
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Client Name: {name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Email: {email}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Model: {Model}</Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">Price: $ {Price}</Card.Subtitle>
                    <Card.Text>Address: {address}
                    </Card.Text>
                    <Card.Subtitle className="mb-2 text-muted">Status: {status}</Card.Subtitle>
                    <Button onClick={hanldeApproved}>{status}</Button>
                    <Button className="ms-3" onClick={() => handleDelete(_id)}>Delete</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ManageAllOrdersData;