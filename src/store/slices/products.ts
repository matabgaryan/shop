import {ActionReducerMapBuilder, createAsyncThunk, createSlice, SliceCaseReducers} from "@reduxjs/toolkit";
import {STATUS} from "../../core/enums";
import {getProductsList} from "../../core/api/products";
import {IProduct, IProductsState} from "./interface";
import {NoInfer} from "@reduxjs/toolkit/dist/tsHelpers";
import {RootState} from "../../core/types";

const initialState: IProductsState = {
    status: "",
    products: [],
};

const productSlice = createSlice<IProductsState, SliceCaseReducers<IProductsState>>({
    name: "products",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products.push(...action.payload);
        }
    },
    extraReducers: (builder: ActionReducerMapBuilder<NoInfer<IProductsState>>) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.status = STATUS.PENDING;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.products = action.payload;
                state.status = STATUS.SUCCEEDED;
            })
            .addCase(getProducts.rejected, (state) => {
                state.status = STATUS.REJECTED;
            });
    },
});

export const getProducts = createAsyncThunk<IProduct[]>("fetch/products", async () => {
    return await getProductsList();
});
export const { addProducts } = productSlice.actions;

export const filteredProducts = (state: RootState) => state.products.products

export default productSlice.reducer;
