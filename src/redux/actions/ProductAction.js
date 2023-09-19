import axios from "axios";


export  const getProduct =()=>{
    return (dispatch)=>{
        axios('https://650806e156db83a34d9b99c9.mockapi.io/products')
            .then(({data}) =>{
                dispatch({type: 'GET_PRODUCT', payload: data})
                console.log(data)
            })
    }
}

export const editFavorite = value => {
    return (dispatch) => {
        axios.put(`https://650806e156db83a34d9b99c9.mockapi.io/products/${value.id}`, value)
            .then(({data}) => {
                dispatch({type: 'EDIT_FAVORITE', payload: data})
            })
    }
}

export const addProduct =(value)=> {
    return {type: 'ADD_PRODUCT', payload: value}
}

export const increaseAmount =(id)=>{
    return {type:'INCREASE_AMOUNT', payload:id}
}
export const decreaseAmount =(id)=>{
    return{type: 'DECREASE_AMOUNT',payload:id}
}

