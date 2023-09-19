import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {decreaseAmount, increaseAmount} from "../../redux/actions/ProductAction";
import BackBtn from "../../components/buttons/back";
import './style.scss'
import Header from "../../components/header/Header";

const ContainPage = () => {
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts)

    return (
        <div>
            <Header/>
            <div className={'container'}>
                <div className="wr-carts">
                    {
                        carts.map(cart =>
                            <div className={'wrapper-cart'} key={cart.id}>
                                <img className={'cart-img'} src={cart.imgProduct} alt=""/>
                                <button disabled={cart.amount === 0} onClick={() => dispatch(increaseAmount(cart.id))}>+
                                </button>
                                <h4>{cart.amountCart}</h4>
                                <button disabled={cart.amountCart === 1}
                                        onClick={() => dispatch(decreaseAmount(cart.id))}>-
                                </button>
                                <h3>{Number(cart.price - (cart.price * cart.discount) / 100) * Number(cart.amountCart)} KGS</h3>
                            </div>)
                    }
                </div>
                <BackBtn/>
            </div>
        </div>
    );
};

export default ContainPage;