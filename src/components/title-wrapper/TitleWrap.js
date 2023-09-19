import React from 'react';
import {Link} from "react-router-dom";
import './style.scss'

const TitleWrap = ({h1}) => {
    return (
        <div className={'Title-wr'}>
            <p>Products</p>
            <h1>{h1}</h1>
            <nav>
                <ul>
                    <li><Link to={'/products'}>ALL PRODUCTS </Link></li>
                    <li><Link to={'/new-products'}>NEW</Link></li>
                    <li><Link to={'/bestsellers'}>BEST SELLERS</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default TitleWrap;