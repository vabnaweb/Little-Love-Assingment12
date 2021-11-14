import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageAllOrdersData from './ManageAllOrdersData';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([])
    const {isLoading} = useAuth();
    useEffect(() => {
        fetch(`http://localhost:5000/orders`)
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [])

    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    return (
        <div>
            <Container>
                <h1 className="my-5 fw-bold text-center">Manage All Orders</h1>
                <Row xs={1} md={2} lg={3}>
                    {
                        allOrder.map(orderall => <ManageAllOrdersData
                            key={orderall._id}
                            orderall={orderall}>

                        </ManageAllOrdersData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default ManageAllOrders;