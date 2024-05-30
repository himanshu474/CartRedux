import { combineReducers } from "redux";
import productReducer from "../Redux/Products/ProductReducer";
import cartReducer from "../Redux/carts/CartReducer";
import pageReducer from "../Redux/Page/PageReducer";

const RootReducer = combineReducers({
    products: productReducer, 
    carts: cartReducer,
    pages: pageReducer});

export default RootReducer;