import { combineReducers
 } from "redux";
 import { productReducer,selectProductReducer } from "./productReducers";

 const reducers = combineReducers({
     allProducts: productReducer,
     product: selectProductReducer,
 });

 export default reducers;