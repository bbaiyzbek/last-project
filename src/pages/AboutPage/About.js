import React, {useEffect} from 'react';
import Header from "../../components/header/Header";
import Hero from "../../components/hero";
import BackBtn from "../../components/buttons/back";
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";


const AboutPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const heroProduct = products.filter((img,idx) => idx ===7 )
    return (
        <div className={'container'}>
            <Header/>
            <Hero heroProduct={heroProduct}/>
            <BackBtn/>
        </div>
    );
};

export default AboutPage;