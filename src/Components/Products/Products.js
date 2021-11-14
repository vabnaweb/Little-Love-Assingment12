import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import ProductsData from './ProductsData';

const Products = () => {
    const [products, setproducts] = useState([])
    const {isLoading} = useAuth();
    useEffect(() => {
        fetch("http://localhost:5000/products")
            .then(res => res.json())
            .then(data => setproducts(data))
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
                        products.map(product => <ProductsData key={product._id} product={product}></ProductsData>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Products;