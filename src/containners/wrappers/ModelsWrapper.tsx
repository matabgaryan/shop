import LoginModal from "../../components/modals/LoginModal";
import React from "react";
import CartModal from "../../components/modals/cart/CartModal";
import {MODAL_NAMES} from "../../constants/appConstants";
import {useModalHook} from "../../hooks/useModal";

export const AppModals:React.FC = () => {
    const { isOpen, modalName } = useModalHook();
    return (
        <>
            <CartModal isOpen={isOpen && modalName === MODAL_NAMES.cartModal}/>
            <LoginModal isOpen={isOpen && modalName === MODAL_NAMES.loginModal} />
        </>
    );
}

export default AppModals;
