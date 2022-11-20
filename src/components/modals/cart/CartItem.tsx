import React from "react";
import {IProduct} from "../../../store/slices/interface";

export const CartItem: React.FC<{product: IProduct, remove: (id: string) => void}> = ({product, remove}) => {
    return(
        <div
            className="mb-2 flex flex-row items-center justify-between border rounded-md border-greyBorder p-2 "
            key={product.id}
        >
            <div
                className=" flex flex-col">
                <p>Item: {product.name} </p>
                <p>Price: {product.price} </p>
            </div>
            <button onClick={() => remove(product.id)} className="rounded-md p-2 bg-redPrimary text-white text-xs">Delete</button>
        </div>
    )
}
