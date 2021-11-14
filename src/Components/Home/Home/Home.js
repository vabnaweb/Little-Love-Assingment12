import React from 'react';
import Banner from '../Banner/Banner';
import ProductsHome from '../Products/ProductsHome';
import Reviews from '../Reviews/Reviews';
import Social from '../Social/Social';

const Home = () => {
    return (
        <div>
            <div className="bg-warning" style={{height:"70px"}}>
            <h2 className="fw-bold text-center text-light" >WELCOME TO LITTLE LOVE</h2>
            </div>
            <Banner></Banner>
            <ProductsHome></ProductsHome>
            <Social></Social>
            <Reviews></Reviews>
            
        </div>
    );
};

export default Home;