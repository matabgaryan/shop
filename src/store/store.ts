import {combineReducers, configureStore, PreloadedState} from "@reduxjs/toolkit";
import shopCart from "./slices/shopCart";
import productsReducer from "./slices/products";
import authReducer from './slices/auth';
import modalReducer from './slices/modals';
import {RootState} from "../core/types";

export const store = configureStore({
    reducer:{
        shopCart,
        products: productsReducer,
        auth: authReducer,
        modals: modalReducer,

    },
    devTools: true,
})
const rootReducer = combineReducers({
    shopCart,
    products: productsReducer,
    auth: authReducer,
    modals: modalReducer,
});


export function setupStore(preloadedState?: PreloadedState<RootState>) {
    return configureStore({
        reducer: rootReducer,
        preloadedState
    })
}

