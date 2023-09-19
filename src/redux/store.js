import thunk from "redux-thunk";
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import ProductReducer from "./reducers/ProductReducer";

const store = createStore(
    ProductReducer,
    composeWithDevTools(applyMiddleware(thunk))
)

export default store