import React from "react";
import {CardIcon} from "../../../icons/CardIcon";
import { useSelector} from "react-redux";
import {RootState} from "../../../../core/types";
import {logout} from "../../../../store/slices/auth";
import {useNavigationHook} from "../../../../hooks/useNavigation";
import {ROUTES} from "../../../../configs/routes";
import {BUTTON_VARIANTS, MODAL_NAMES} from "../../../../constants/appConstants";
import {useModalHook} from "../../../../hooks/useModal";
import {useAppDispatch} from "../../../../hooks/useRedux";
import {AppButton} from "../../../buttons/BaseButton";

export const NavbarRightSide = () => {
    const dispatch = useAppDispatch();
    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const { items } = useSelector((state: RootState) => state.shopCart);
    const selectedItemsCount = items.length;
    const { handleNavigate } = useNavigationHook();
    const { handleOpenModal } = useModalHook();

    return(
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {
                !!selectedItemsCount &&
                <div className="mr-6">
                    <button className="relative" onClick={() =>  handleOpenModal(MODAL_NAMES.cartModal)}>
                        <CardIcon />
                        <span className="absolute text-black text-xs rounded-md -top-2.5 -right-1">
                        {selectedItemsCount}
                    </span>
                    </button>
                </div>
            }
            {
                isAuthenticated ?
                    <AppButton
                        variant={BUTTON_VARIANTS.transparent}
                        onClick={() => dispatch(logout())}
                        text="Logout"
                        className="w-40"
                    />
                    :
                    <>
                        <AppButton
                            variant={BUTTON_VARIANTS.transparent}
                            onClick={() => handleOpenModal(MODAL_NAMES.loginModal)}
                            text="Sign In As User"
                            className="w-40"
                        />
                        <AppButton
                            variant={BUTTON_VARIANTS.dark}
                            onClick={() => handleNavigate(ROUTES.adminLogin)}
                            text="Sign In As Admin"
                            className="w-40"
                        />
                    </>
            }
        </div>

    )
}
