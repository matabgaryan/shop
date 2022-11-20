import React, {useCallback, useMemo} from "react";
import {ProductItem} from "./ProductItem";
import {IProduct} from "../../../../store/slices/interface";
import {addProduct} from "../../../../store/slices/shopCart";
import {useAppDispatch} from "../../../../hooks/useRedux";

interface IProductsList {
    products: IProduct[]
}

export const ProductsList: React.FC<IProductsList> = ({ products }) => {
    const dispatch = useAppDispatch();
    const addProductToCart = useCallback((item: IProduct) => {
        dispatch(addProduct(item));
    },[dispatch]);

    const renderProducts = useMemo(() => (
        products.map((product) =>
            <ProductItem
                addProductToCart={addProductToCart}
                key={product.id + Math.random()}
                product={product}/>)
    ),[addProductToCart, products])

    return (
        <div data-testid="products-list" className="grid md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-7 w-full">
            {renderProducts}
        </div>
    )
}
