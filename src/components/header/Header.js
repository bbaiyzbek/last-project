import React from 'react';
import './style.scss'
import logo from '../assets/Group 165.png'
import {Link, useNavigate} from "react-router-dom";
import SearchIcon from "../Icons/SearchIcon";
import ContainIcon from "../Icons/ContainIcon";
import UserIcon from "../Icons/UserIcon";
import LikeIcon from "../Icons/likeIcon";
import {useSelector} from "react-redux";

const Header = () => {
    const navigate = useNavigate()
    const carts = useSelector(state => state.carts)
    const cart = carts.map(cart => cart)
    return (
        <header>
            <div className="container">
                <div className="headerWrap">
                        <Link to={'/'}><img src={logo} alt=""/></Link>
                    <nav>
                        <ul>
                            <li><Link to={'/'}> HOME</Link></li>
                            <li><Link to={'/products'}>PRODUCTS</Link></li>
                            <li><Link to={'/about'}>ABOUT</Link></li>
                        </ul>
                    </nav>
                    <div className={'button-wrap'}>
                        <button>
                            <SearchIcon/>
                        </button>
                        <button className={'cart-btn'} onClick={() => navigate('/contain')}>
                            <ContainIcon/>
                            {
                                cart.length >0&&
                                <span >{cart.length}</span>
                            }
                        </button>
                        <button onClick={() => navigate('/favorites')}>
                            <LikeIcon/>
                        </button>
                        <button>
                            <UserIcon/>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;