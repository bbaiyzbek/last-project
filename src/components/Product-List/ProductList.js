import React, {useState} from 'react';
import './style.scss'
import ContainIcon from "../Icons/ContainIcon";
import ZoomIcon from "../Icons/zoomIcon";
import LikeBtn from "./like-btn/LikeBtn";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, increaseAmount} from "../../redux/actions/ProductAction";

const ProductList = ({products}) => {
    const [zoomImg,setZoomImg] = useState(false)
    const [fullImg,setFullImg] = useState({})
    const dispatch = useDispatch()
    const carts = useSelector(state => state.carts)

    const handleAddCart =(product)=>{
        if (carts.find(carts => carts.id === product.id)){
            dispatch(increaseAmount(product.id))
        }else {
            const newValue = {...product, amountCart: 1}
            dispatch(addProduct(newValue))
        }
    }

    const handleZoomImg =(id)=>{
        setFullImg(products.find(product => product.id === id))
        setZoomImg(true)
    }


    return (
        <div className={'container'}>
            <div className="row">
                {
                    products.map(product => {
                        return(
                            <div className={'col-4'} key={product.id}>
                                <div className="card">
                                    {
                                        zoomImg &&
                                        <div className={'fullImg'}>
                                            <div className={'fullImg__img'}>
                                                <button onClick={()=>setZoomImg(false)}>&#x2715;</button>
                                                <img  src={fullImg.imgProduct} alt=""/>
                                            </div>
                                        </div>
                                    }
                                    <p>Get up to -{product.discount}% off Today Only!</p>
                                    <img src={product.imgProduct} alt=""/>
                                    <div className={'icons-wrap'}>
                                        <div className={'icon-btn'}>
                                            <button onClick={()=>handleAddCart(product)}>
                                                <ContainIcon/>
                                            </button>
                                            <button onClick={()=>handleZoomImg(product.id)}>
                                                <ZoomIcon/>
                                            </button>
                                            <LikeBtn product={product}/>
                                        </div>
                                    </div>
                                    <h4>{product.nameProduct}</h4>
                                    <p className={'Price-wr'}> {product.price - (product.discount * product.price) / 100} / <span> {product.price}  </span>  KGS</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default ProductList;