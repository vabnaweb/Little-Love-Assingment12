import React, { useState, useEffect } from 'react';
import { Button, Container, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HomeProductsData from './HomeProductsData';
const ProductsHome = () => {
    const [products, setproducts] = useState([])
    const {isLoading} = useAuth();
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setproducts(data.slice(0, 6)))
    }, [])
    
    if (isLoading) {
        return <Spinner className="item-center mt-5" animation="border" variant="info" />
        
    }
    return (
        <div>

            <Container>
                <h1 className="my-5 fw-bold text-center">Our Products</h1>
                <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        products.map(product => <HomeProductsData key={product._id} product={product}></HomeProductsData>)
                    }
                </Row>
                <Link to="/products">
                    <Button className="mt-3">See More</Button></Link>
            </Container>



        </div>
    );
};

export default ProductsHome;