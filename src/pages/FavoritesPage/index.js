import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProduct} from "../../redux/actions/ProductAction";
import Header from "../../components/header/Header";
import BackBtn from "../../components/buttons/back";
import ProductList from "../../components/Product-List/ProductList";


const FavoritesPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.product)


    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    const favorites = products.filter(el => el.liked === true)

    return (
        <div>
            <Header/>
            <div className="container">
                <div className={'Title-wr'}>
                    <h1>Favorite Products</h1>
                </div>
                <ProductList products={favorites}/>
                <BackBtn/>
            </div>
        </div>
    );
};

export default FavoritesPage;