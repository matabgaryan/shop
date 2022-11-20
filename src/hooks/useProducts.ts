import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { RootState } from "../core/types";
import { getProducts } from "../store/slices/products";
import {ProductsFilter} from "../core/services/ProductsFilter";
import {STATUS} from "../core/enums";
import {useAppDispatch} from "./useRedux";

const PRODUCTS_COUNT = 5;
export const useProducts = () => {
    const dispatch = useAppDispatch();
    const { products, status } = useSelector((state: RootState) => state.products);
    const [showAllProducts, setShowAllProducts] = useState<boolean>(true);

    const productsFilter = new ProductsFilter(products);

    useEffect( () => {
        if (!products.length) dispatch(getProducts());
    }, [products]);

    return {
        allProducts: products,
        mostProbableProducts: productsFilter.getProductsByWeightProbability(PRODUCTS_COUNT),
        isLoading: status === STATUS.PENDING,
        showAllProducts,
        setShowAllProducts,
    }
}
