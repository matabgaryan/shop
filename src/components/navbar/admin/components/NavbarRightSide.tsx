import React from "react";
import {logout} from "../../../../store/slices/auth";
import {useNavigationHook} from "../../../../hooks/useNavigation";
import {ROUTES} from "../../../../configs/routes";
import {useAppDispatch} from "../../../../hooks/useRedux";
import {AppButton} from "../../../buttons/BaseButton";
import {BUTTON_VARIANTS} from "../../../../constants/appConstants";

export const NavbarRightSide = () => {
    const dispatch = useAppDispatch();
    const { handleNavigate } = useNavigationHook();

    const handleLogout = () => {
        dispatch(logout());
        handleNavigate(ROUTES.adminLogin)
    }

    return(
        <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <AppButton
                variant={BUTTON_VARIANTS.transparent}
                onClick={() => handleLogout()}
                text="Logout"
                className="w-40"
            />
        </div>

    )
}
