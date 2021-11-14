import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'
import React, { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form, Button, Alert, Row } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';
import ReviewData from './ReviewData';


const Review = () => {
    const { user } = useAuth();
    const [review, setReview] = useState({})
    const [reviews, setReviews] = useState([])
    const [rating, setRating] = useState()
    const [orderConfirmed, setOrderConfirmed] = useState(false)


    useEffect(() => {
        fetch("http://localhost:5000/reviews")
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
        // console.log(newInfo);

    }

    const handleOnSubmit = (e) => {

        alert("Review Submit?")
        //Collect Data
        const reviews = {
            ...review,
            name: user.displayName,
            email: user.email,
            rating: rating
        }
        console.log(reviews);

        fetch("http://localhost:5000/reviews", {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviews)
        })
            .then(res => res.json())
            .then(data => {
                setOrderConfirmed(true)
            })



        e.preventDefault()

    }
    return (
        <div>
            <div>
                <h1 className="fw-bold text-center my-5" >Our Clients Review</h1>

                <Container>
                    <Row xs={1} md={2} lg={3}>

                        {
                            reviews.map(review => <ReviewData 
                            key={review._id}
                            review={review}
                            ></ReviewData>)


                        }

                    </Row>
                </Container>



                <h1 className="fw-bold text-center my-5" >Please Rate Us</h1>

                {
                    orderConfirmed && <Alert variant="success">
                        <FontAwesomeIcon icon={faCheckCircle} />  Thanks For Your Feedback !
                    </Alert>
                }
                <Container className="w-50">
                    <Form onSubmit={handleOnSubmit}>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                disabled
                                onBlur={handleOnBlur}
                                type="text"
                                name="name"
                                placeholder="Enter Name"
                                defaultValue={user.displayName} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                disabled
                                onBlur={handleOnBlur}
                                name="email"
                                type="email"
                                placeholder="Enter email"
                                defaultValue={user.email} />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                onBlur={handleOnBlur}
                                as="textarea"
                                name="comment"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }} required
                            />
                        </FloatingLabel>

                        <ReactStars
                            count={5}
                            onChange={(rate) => setRating(rate)}
                            name="rating"
                            size={50}
                            activeColor="#ffd700"
                        />
                        <Button type="submit">Submit</Button>
                    </Form>

                </Container>

            </div>

        </div>
    );
};

export default Review;