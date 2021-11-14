import React from 'react';
import "./NotFound.css"
import img from "../image/nai.gif"

const NotFound = () => {
    return (
        <div>
            <h4 className="text-center mt-5">404 Not Found</h4>
            <img className="non-style my-5" src={img} alt="" />

        </div>
    );
};

export default NotFound;