import React from "react";
import { useSelector} from "react-redux";
import { RootState} from "../../../core/types";
import {adminLogin, setUser} from "../../../store/slices/auth";
import {useNavigationHook} from "../../../hooks/useNavigation";
import {ROUTES} from "../../../configs/routes";
import {useAppDispatch} from "../../../hooks/useRedux";
import {AppButton} from "../../../components/buttons/BaseButton";
import {BUTTON_VARIANTS} from "../../../constants/appConstants";

export const AdminLogin = () => {
    const {loading} = useSelector((state: RootState) => state.auth);
    const {handleNavigate} = useNavigationHook();
    const dispatch = useAppDispatch();

    const handleLogin = async () => {
        const res = await dispatch(adminLogin());
        await dispatch(setUser(res.payload));
        await handleNavigate(ROUTES.adminDashboard);
    }

    return (
        <div
            className="flex flex-col h-screen justify-center items-center bg-cover bg-no-repeat bg-background-sponsor-auth"
        >
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div
                    className="relative w-full max-w-sm  w-full	 my-6 mx-auto">
                    <div
                        className="p-6 border border-white rounded-[6px] shadow-[2px_2px_10px_0px_#C8C8C880] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        <div
                            className="relative flex items-center justify-between">
                            <h3 className="text-[18px] font-GoogleSansBold">
                                Sign In As Admin
                            </h3>
                        </div>
                        <div className="relative flex-auto mt-5">
                            <div className="mb-5">
                                <label htmlFor="last_name"
                                       className="font-[400] pl-4 block mb-2 text-sm font-GoogleSansRegular text-appBlack text-[16px]">
                                    Username
                                </label>
                                <input type="text" id="last_name"
                                       value="admin"
                                       disabled={true}
                                       className="disabled:bg-greyBorder disabled:opacity-50 w-full h-[58px]  placeholder-lightGrey  bg-transparent border border-oziLightGrey text-gray-900 text-sm rounded-md    p-2.5 "
                                       placeholder="Username" required/>
                            </div>
                            <div>
                                <label htmlFor="last_name"
                                       className="font-[400] pl-4 block mb-2 text-sm font-GoogleSansRegular text-appBlack text-[16px]">
                                    Email
                                </label>
                                <input
                                    value="admin@example.com"
                                    disabled={true}
                                    type="text" id="last_name"
                                    className="disabled:bg-greyBorder disabled:opacity-50 w-full h-[58px]  placeholder-lightGrey  bg-transparent border border-oziLightGrey text-gray-900 text-sm rounded-md    p-2.5 "
                                    placeholder="Email" required/>
                            </div>
                        </div>
                        <div
                            className="flex flex-col items-center justify-end mt-6">
                            <AppButton
                                variant={BUTTON_VARIANTS.dark}
                                onClick={() => handleLogin()}
                                text={`${loading ? 'Loading...' : 'Login'}`}
                                className="w-full"
                            />
                            <AppButton
                                variant={BUTTON_VARIANTS.transparent}
                                onClick={() => handleNavigate(ROUTES.home)}
                                text="Go To User Side"
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
