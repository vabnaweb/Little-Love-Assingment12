import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import MyOrdersData from './MyOrdersData';

const MyOrders = () => {
    const {user} = useAuth();
    const [myOrder, setMyOrder] = useState([])
    useEffect(() =>{
        fetch(`http://localhost:5000/orders`)
        .then(res => res.json())
        .then(data => {
            const v = data.filter(p => p.email === user.email)
            setMyOrder(v)

        })
    },[user.email])
    return (
        <div>
            <Container>
            <h1 className="my-5 text-center fw-bold">My Orders</h1>
            <Row xs={1} md={2} lg={3}>
                {
                    myOrder.map(order => <MyOrdersData key = {order._id} order={order}></MyOrdersData>)
                }
            </Row>
            </Container>
            
        </div>
    );
};

export default MyOrders;