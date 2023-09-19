const initialState ={
    product:[],
    carts:[]
}

export default function ProductReducer(state = initialState, action){
switch (action.type){
    case 'GET_PRODUCT':
        return {...state, product: action.payload}
    case 'EDIT_FAVORITE':
        return {...state, product: state.product.map(product => product.id === action.payload.id ? action.payload : product)}
    case 'ADD_PRODUCT' :
        return {...state,carts:[...state.carts,{...action.payload,amount :action.payload.amount -1,amountCart: 1} ]}
    case 'INCREASE_AMOUNT':
        return  {...state,carts:state.carts.map(cart => cart.id ===action.payload ?
                {...cart, amountCart:cart.amountCart +1
                    ,amount:cart.amount -1}: cart)}
    case 'DECREASE_AMOUNT':
        return {...state,carts: state.carts.map(cart => cart.id ===action.payload ?
                {...cart, amountCart:cart.amountCart -1
                    ,amount:cart.amount +1}: cart)}
    default :
        return state
}
}