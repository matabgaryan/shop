import React from "react";
import {CardIcon} from "../../../icons/CardIcon";
import { useSelector} from "react-redux";
import {RootState} from "../../../../core/types";
import {logout} from "../../../../store/slices/auth";
import {useNavigationHook} from "../../../../hooks/useNavigation";
import {ROUTES} from "../../../../configs/routes";
import {MODAL_NAMES} from "../../../../constants/appConstants";
import {useModalHook} from "../../../../hooks/useModal";
import {useAppDispatch} from "../../../../hooks/useRedux";

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
                    <button
                        onClick={() => dispatch(logout())}
                        className="h-12 w-40	 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-appBlack rounded-md shadow-sm text-[14] font-[400] text-oziBlack bg-transparent hover:opacity-80"
                    >
                        Logout
                    </button>
                    :
                    <>
                        <button
                            onClick={() => handleOpenModal(MODAL_NAMES.loginModal)}
                            className="h-12 w-40	 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-appBlack rounded-md shadow-sm text-[14] font-[400] text-oziBlack bg-transparent hover:opacity-80"
                        >
                            Sign In As User
                        </button>
                        <button
                            onClick={() => handleNavigate(ROUTES.adminLogin)}
                            className="h-12 w-40	 ml-6 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-[14] font-[400] text-white bg-appBlack hover:opacity-80"
                        >
                            Sign In As Admin
                        </button>
                    </>
            }
        </div>

    )
}
