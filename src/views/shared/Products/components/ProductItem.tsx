import React from "react";
import {AttributeInfo} from "../../../../components/attribute";
import ProductImage from '../../../../assets/images/productItem.jpeg';
import {IProduct} from "../../../../store/slices/interface";

interface IProductItemProps {
    product: IProduct,
    addProductToCart: (item: any) => void
}

export const ProductItem: React.FC<IProductItemProps> = ({product, addProductToCart}) => {
    return (
        <div
            data-testid="product-item"
            className="container mx-auto p-6 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
            <img className="rounded-xl" src={ProductImage} alt="Product"/>
            <div className="flex flex-col">
                <h1 data-testid="product-item-name" className="mt-5 text-lg font-semibold">{product.name}</h1>
                <AttributeInfo
                    attribute="Price"
                    value={`${product.price}$`} />
                <AttributeInfo
                    valueClassName="p-1 bg-redPrimary text-white rounded"
                    attribute="Weight" value={`${product.weight} kg`} />
                <AttributeInfo
                    attribute="Start Date"
                    value="May 10, 2022" />
                <AttributeInfo
                    attribute="End Date"
                    value="May 10, 2022" />
            </div>
            <div className="mt-6 text-center">
                <button
                    onClick={() => addProductToCart(product)}
                    className="text-white text-sm	 font-semibold bg-appBlack py-1 px-2 rounded-md shadow-md  transition duration-500 transform-gpu  ">
                    Add To Card
                </button>
            </div>
        </div>
    )
}
