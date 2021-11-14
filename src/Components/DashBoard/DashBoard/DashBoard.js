import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import {
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts';
import MyOrders from '../MyOrders/MyOrders';
import PaymentSystem from '../Pay/PaymentSystem';
import Review from '../Review/Review';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
    const { admin } = useAuth();

    return (
        <div>


            <h1 className="text-center my-3 fw-bold">DashBoard</h1>

            <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
                <Container>
                    <NavLink as={Link} to="/" style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }}>Home</NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" >
                        <Nav className="me-auto">
                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }} to="/products">Products</NavLink>

                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }} to={`${url}/myorders`}>My Orders</NavLink>
                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", marginRight: "10px", fontWeight: "600" }} to={`${url}/paymentsystem`}>Payment Method</NavLink>
                            <NavLink as={Link} style={{ textDecoration: "none", color: "white", fontWeight: "600" }} to={`${url}/review`}>Reviews</NavLink>

                            {admin &&
                                <>
                                    <NavLink as={Link} style={{ textDecoration: "none", color: "yellow", fontWeight: "600" }} to={`${url}/manageAllOrders`}>Manage All Orders</NavLink>
                                    <NavLink as={Link} style={{ textDecoration: "none", color: "yellow", fontWeight: "600" }} to={`${url}/addProducts`}>Add Products</NavLink>
                                    <NavLink as={Link} style={{ textDecoration: "none", color: "yellow", fontWeight: "600" }} to={`${url}/makeAdmin`}>Make Admin</NavLink>
                                    <NavLink as={Link} style={{ textDecoration: "none", color: "yellow", fontWeight: "600" }} to={`${url}/manageProducts`}>Manage Products</NavLink>
                                </>
                            }


                        </Nav>

                        {/* <Nav>
                            {admin && <NavDropdown title="Admin Panel" style={{ color: "white" }} className="fw-bold active">
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`${url}/manageAllOrders`}>Manage All Orders</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`${url}/addProducts`}>Add Products</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`${url}/makeAdmin`}>Make Admin</NavLink><br />
                                <NavLink as={Link} style={{ textDecoration: "none", color: "black", fontWeight: "600", marginLeft: "10px" }} to={`${url}/manageProducts`}>Manage Products</NavLink>
                            </NavDropdown>}
                        </Nav> */}

                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Switch>
                <Route exact path={path}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/myorders`}>
                    <MyOrders></MyOrders>
                </Route>
                <Route path={`${path}/paymentsystem`}>
                    <PaymentSystem></PaymentSystem>
                </Route>
                <Route path={`${path}/review`}>
                    <Review></Review>
                </Route>
                <AdminRoute path={`${path}/manageAllOrders`}>
                    <ManageAllOrders></ManageAllOrders>
                </AdminRoute>
                <AdminRoute path={`${path}/addProducts`}>
                    <AddProducts></AddProducts>
                </AdminRoute>

                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>
                <AdminRoute path={`${path}/manageProducts`}>
                    <ManageProducts></ManageProducts>
                </AdminRoute>
            </Switch>





        </div>
    );
};

export default DashBoard;