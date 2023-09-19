import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";
import Header from "../../components/header/Header";
import ProductList from "../../components/Product-List/ProductList";
import BackBtn from "../../components/buttons/back";
import TitleWrap from "../../components/title-wrapper/TitleWrap";

const ProductPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
    return (
        <div className={'container'}>
            <Header/>
            <TitleWrap h1={'ALL PRODUCTS'}/>
            <ProductList products={products}/>
            <BackBtn/>
        </div>
    );
};

export default ProductPage;