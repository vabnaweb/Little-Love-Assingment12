import React from 'react';
import { Card, Spinner } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";
import useAuth from '../../../hooks/useAuth';

const ReviewsAllData = (props) => {
    const { email, comment, name, rating } = props.allreview
    const {isLoading} = useAuth();
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <ReactStars
                            count={5}
                            value={rating}
                            size={25}
                            activeColor="#ffd700"
                            edit={false}
                        />
                        Email: {email} <br />
                        Comment: {comment}
                    </Card.Text>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ReviewsAllData;