import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, Offcanvas, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faClock, faTachometerAlt, faSignOutAlt, faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            {/*============================ Navigation bar =============================*/}

            <Navbar bg="warning" expand={false} fixed="top">
                <Container fluid>
                    <Nav.Link as={Link} to="/home" style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>LITTLE LOVE</Nav.Link>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        placement="start"
                    >
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                        </Offcanvas.Header>
                        
                        <Offcanvas.Body>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                                <Nav.Link as={Link} to="/home" style={{ color: "black", fontWeight: "600" }}>
                                    <FontAwesomeIcon icon={faHome} /> Home</Nav.Link>
                                <Nav.Link as={Link} to="/products" style={{ color: "black", fontWeight: "600" }}><FontAwesomeIcon icon={faClock} /> Products</Nav.Link>

                                {
                                    user?.email ?
                                        <>
                                            <Nav.Link as={Link} to="/dashboard" style={{ color: "black", fontWeight: "600" }}><FontAwesomeIcon icon={faTachometerAlt} /> Dashboard</Nav.Link>
                                            <Nav.Link as={Link} onClick={logOut} to="/login" style={{ color: "black", fontWeight: "600" }}><FontAwesomeIcon icon={faSignOutAlt} /> LogOut</Nav.Link>

                                        </> :
                                        <Nav.Link as={Link} to="/login" style={{ color: "black", fontWeight: "600" }}><FontAwesomeIcon icon={faSignInAlt} /> Login</Nav.Link>
                                }
                            </Nav>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;