import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import ManageProductsData from './ManageProductsData';

const ManageProducts = () => {
    const [products, setProducts] = useState([])
    const {isLoading} = useAuth();
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    return (
        <div>
            <Container>
                <h1 className="fw-bold text-center my-5">Manage Products</h1>
                <Row xs={1} md={2} lg={3}>

                    {
                        products.map(product => <ManageProductsData key = {product._id} product = {product}></ManageProductsData>)

                    }
                </Row>
            </Container>

        </div>
    );
};

export default ManageProducts;