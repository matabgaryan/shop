import React from "react";
import {logout} from "../../../../store/slices/auth";
import {useNavigationHook} from "../../../../hooks/useNavigation";
import {ROUTES} from "../../../../configs/routes";
import {useAppDispatch} from "../../../../hooks/useRedux";

export const NavbarRightSide = () => {
    const dispatch = useAppDispatch();
    const { handleNavigate } = useNavigationHook();

    const handleLogout = () => {
        dispatch(logout());
        handleNavigate(ROUTES.adminLogin)
    }

    return(
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                    <button
                        onClick={() => handleLogout()}
                        className="h-12 w-40	 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-appBlack rounded-md shadow-sm text-[14] font-[400] text-oziBlack bg-transparent hover:opacity-80"
                    >
                        Logout
                    </button>
        </div>

    )
}
