import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";
import Header from "../../components/header/Header";
import Hero from "../../components/hero";
import ProductList from "../../components/Product-List/ProductList";

const HomePage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const product = products.slice(0, 6)
    const heroProduct = products.filter((img, idx) => idx === 7)

    return (
        <div>
            <Header/>
            <div className={'container'}>
                <Hero heroProduct={heroProduct}/>
                <ProductList products={product}/>
            </div>
        </div>
    );
};

export default HomePage;