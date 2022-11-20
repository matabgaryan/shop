import {createSlice, PayloadAction, SliceCaseReducers} from "@reduxjs/toolkit";
import {IProduct, IShopCartInitialState} from "./interface";

const initialState: IShopCartInitialState = {
    items: [],
    isOpen: false,
}

export const shopCartSlice = createSlice<IShopCartInitialState, SliceCaseReducers<IShopCartInitialState>>({
    name: "shopCart",
    initialState,
    reducers:{
        addProduct: (state, action: PayloadAction<IProduct>)=>{
            const product = state.items.find(x => x.id === action.payload.id);
            if (product) {
                product.count++;
                return;
            }
            state.items.push({...action.payload, count: 1});
        },
        deleteProduct: (state, action: PayloadAction<{ id: string }>)=>{
            state.items = state.items.filter(
                (item) => item.id !== action.payload.id
            );
        }
    }
});

export const { addProduct, deleteProduct } = shopCartSlice.actions;

export default shopCartSlice.reducer;
