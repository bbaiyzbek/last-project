import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";
import Header from "../../components/header/Header";
import TitleWrap from "../../components/title-wrapper/TitleWrap";
import ProductList from "../../components/Product-List/ProductList";

const NewProductPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])


    const newPr = products.slice(0,5)
    return (
        <div>
            <Header/>
            <TitleWrap h1={'NEW  PRODUCTS'}/>
            <ProductList products={newPr}/>
        </div>
    );
};

export default NewProductPage;