import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";
import ProductList from "../../components/Product-List/ProductList";
import TitleWrap from "../../components/title-wrapper/TitleWrap";
import Header from "../../components/header/Header";

const BestSellersPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)


    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const bestsellers = products.filter(el => el.discount >= 15)

    return (
        <div>
            <Header/>
            <TitleWrap h1={'BEST SELLERS'}/>
            <ProductList products={bestsellers}/>
        </div>
    );
};

export default BestSellersPage;