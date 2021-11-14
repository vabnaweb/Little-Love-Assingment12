import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ReviewsAllData from './ReviewsAllData';
import ReviewsData from './ReviewsData';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    const [allReviews, setAllReviews] = useState([])
    const { user } = useAuth()
    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => {
                const v = data.filter(p => p.email === user.email)
                setReviews(v)

            })
    }, [user.email])

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then(res => res.json())
            .then(data => setAllReviews(data))
    }, [])
    return (
        <div>
            <h1 className="fw-bold text-center my-5" >Your Feedback</h1>
            <Container className="w-50">
                <Row >

                    {
                        reviews.map(review => <ReviewsData
                            key={review._id}
                            review={review}
                        ></ReviewsData>)
                    }

                </Row>
            </Container>
            <h1 className="fw-bold text-center my-5" >Clients Feedback</h1>
            <Container>
                <Row xs={1} md={2} lg={3}>
                    {
                        allReviews.map(allreview => <ReviewsAllData 
                            key={allreview._id}
                            allreview={allreview}
                            ></ReviewsAllData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Reviews;