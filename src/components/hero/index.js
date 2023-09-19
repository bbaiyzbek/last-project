import React from 'react';
import './style.scss'
import logos from '../assets/Group 22.png'
import {useNavigate} from "react-router-dom";


const Hero = ({heroProduct}) => {
    const navigate = useNavigate()

    return (
        <div className={'container'}>
            <div>
                {
                    heroProduct.map(heroProduct =>
                        <div className={'hero'}>
                            <div className="hero-wrapperInfo">
                                <div className="hero-wrapperInfo__title">
                                    <h1>
                                        <span>An exciting place </span>
                                        for the whole family to shop.
                                    </h1>
                                    <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested.</p>
                                    <div className={'shopnow-btn'}>
                                        <button onClick={() => navigate('/products')}>Shop Now</button>
                                        <p>{heroProduct.price - (heroProduct.price * heroProduct.discount) / 100} / <span>{heroProduct.price}</span> KGS</p>
                                    </div>
                                </div>
                            </div>
                            <div className="hero-wrapperInfo">
                                <img src={heroProduct.imgProduct} alt=""/>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="logos-wrapper">
                <img src={logos} alt=""/>
            </div>
        </div>
    );
};

export default Hero;

