import { useSelector} from "react-redux";
import {RootState} from "../../../core/types";
import { deleteProduct } from "../../../store/slices/shopCart";
import {CloseIcon} from "../../icons/CloseIcon";
import React, {useCallback, useMemo} from "react";
import {CartItem} from "./CartItem";
import {useModalHook} from "../../../hooks/useModal";
import {useAppDispatch} from "../../../hooks/useRedux";

const CartModal: React.FC<{isOpen: boolean}> = ({isOpen}) => {
    const { items } = useSelector((state: RootState) => state.shopCart);
    const { handleCloseModal } = useModalHook();
    const dispatch = useAppDispatch();

    const handleRemoveProduct = useCallback((productId: string) => {
        dispatch(deleteProduct({id: productId}))
    },[])

    const renderProducts = useMemo(() => (
        items.map((product, index) =>
            <CartItem
                remove={handleRemoveProduct}
                key={product.id + Math.round(index)}
                product={product}/>)
    ),[items])

    return (
        <>
            {isOpen &&
                <button
                    className="flex items-center cursor-pointer fixed right-10 top-6 z-50"
                    onClick={() => handleCloseModal()}
                >
                    <CloseIcon />
                </button>
            }
        <div className="flex  flex-col items-center justify-center  py-2">
            <div
                className={` top-0 right-0 w-[30vw] bg-greyBorder px-4 py-4 sm:px-6 ring-black ring-opacity-5 bg-white shadow md:rounded shadow-md fixed h-full z-40  ease-in-out duration-300 
                 ${
                    isOpen ? "translate-x-0 " : "translate-x-full"
                }`}
            >
                <div className="bg-white h-screen p-4 mt-8">
                    {renderProducts}
                </div>

            </div>

        </div>
        </>
    )
}

export default CartModal
