import React from 'react';
import {useDispatch} from "react-redux";
import {editFavorite} from "../../../redux/actions/ProductAction";
import LikeIcon from "../../Icons/likeIcon";
import RedLikeIcon from "../../Icons/redLikeIcon";

const LikeBtn = ({product}) => {
    const dispatch = useDispatch()

    const handleEditFavorite = (object) => {
        if (object.liked) {
            const new_value = {...object, liked: false}
            dispatch(editFavorite(new_value))
        } else {
            const new_value = {...object, liked: true}
            dispatch(editFavorite(new_value))
        }
    }

    return (
        <div>
            <button onClick={() => handleEditFavorite(product)}>
                {
                    product.liked ?
                        <RedLikeIcon/>
                        :
                        <LikeIcon/>
                }
            </button>
        </div>
    );
};

export default LikeBtn;