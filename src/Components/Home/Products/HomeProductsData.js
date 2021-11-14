import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Products.css"

const HomeProductsData = (props) => {
    const {_id, imgUrl, name, description, price } = props.product
    return (
        <div>
            <Col>
                <Card>
                    <Card.Img className="img-size" variant="top" src={imgUrl} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Title>Price: $ {price}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/order/${_id}`}>
                            <Button>Order Now</Button>
                        </Link>
                    </Card.Body>
                </Card>
                
            </Col>
            

        </div>
    );
};

export default HomeProductsData;