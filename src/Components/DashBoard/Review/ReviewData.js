import React from 'react';
import { Card } from 'react-bootstrap';
import ReactStars from "react-rating-stars-component";

const ReviewData = (props) => {
    const { email, comment, name, rating } = props.review
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        {/* Rating: {rating} <br/> */}
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

export default ReviewData;