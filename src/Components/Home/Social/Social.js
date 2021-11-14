import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { faFacebook, faInstagram, faTelegram, faTwitter } from "@fortawesome/free-brands-svg-icons"


const Social = () => {
    return (
        <div>
            <h1 className="fw-bold my-5 text-center">Connect With Us</h1>
            <Container>
                
                <Row>
                    <FontAwesomeIcon style={{ color: "#5757d1", fontSize: "80px", display: "block", margin: "auto" }} icon={faFacebook} />
                    <FontAwesomeIcon style={{ color: "#5757d1", fontSize: "80px", display: "block", margin: "auto" }} icon={faInstagram} />
                    <FontAwesomeIcon style={{ color: "#5757d1", fontSize: "80px", display: "block", margin: "auto" }} icon={faTwitter} />
                    <FontAwesomeIcon style={{ color: "#5757d1", fontSize: "80px", display: "block", margin: "auto" }} icon={faTelegram} />
                </Row>
                
            </Container>
            
        </div>
    );
};

export default Social;