import React, {useRef} from "react";
import {useOutsideAlerter} from "../../hooks/useOutsideClick";
import { useSelector } from "react-redux";
import { RootState } from "../../core/types";
import { login } from "../../store/slices/auth";
import {useModalHook} from "../../hooks/useModal";
import {useAppDispatch} from "../../hooks/useRedux";

export default function LoginModal( { isOpen }: {isOpen: boolean}) {
    const { loading } = useSelector((state: RootState) => state.auth);
    const { handleCloseModal } = useModalHook();
    const modalRef = useRef(null);
    const dispatch = useAppDispatch();

    useOutsideAlerter({ref: modalRef, callback: () => handleCloseModal()});

    const handleLogin = async () => {
        await dispatch(login());
        await handleCloseModal()
    }

    return (
        <>
            {isOpen ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div
                            className="relative w-full max-w-sm  w-full	 my-6 mx-auto">
                            <div
                                ref={modalRef}
                                className="p-6 border border-white rounded-[6px] shadow-[2px_2px_10px_0px_#C8C8C880] relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div
                                    className="relative flex items-center justify-between">
                                    <h3 className="text-[18px] font-GoogleSansBold">
                                        Sign In
                                    </h3>
                                    <h3
                                        className="text-[22px]  font-GoogleSansBold cursor-pointer"
                                        onClick={() => handleCloseModal()}
                                    >
                                        ×
                                    </h3>
                                </div>
                                <div className="relative flex-auto mt-5">
                                    <div className="mb-5">
                                        <label htmlFor="username"
                                               className="font-[400] pl-4 block mb-2 text-sm font-GoogleSansRegular text-appBlack text-[16px]">
                                            Username
                                        </label>
                                        <input type="text" id="username"
                                               value="username"
                                               disabled={true}
                                               className="cursor-not-allowed disabled:bg-greyBorder disabled:opacity-50 w-full h-[58px]  placeholder-lightGrey  bg-transparent border border-oziLightGrey text-gray-900 text-sm rounded-md    p-2.5 "
                                               placeholder="Username" required/>
                                    </div>
                                    <div>
                                        <label htmlFor="email"
                                               className="font-[400] pl-4 block mb-2 text-sm font-GoogleSansRegular text-appBlack text-[16px]">
                                           Email
                                        </label>
                                        <input type="text" id="email"
                                               value="user@email.com"
                                               disabled={true}
                                               className="cursor-not-allowed disabled:bg-greyBorder disabled:opacity-50 w-full h-[58px]  placeholder-lightGrey  bg-transparent border border-oziLightGrey text-gray-900 text-sm rounded-md    p-2.5 "
                                               placeholder="Email" required/>
                                    </div>
                                </div>
                                <div
                                    className="flex items-center justify-end mt-6">
                                    <button
                                        className="flex justify-center items-center w-full border border-appBlack bg-appBlack h-[48px] text-white  font-GoogleSansRegular font-[400]  text-[18px] px-6 py-3 rounded  hover:opacity-80   transition-all duration-150"
                                        type="button"
                                        onClick={() => handleLogin()}
                                    >
                                        {loading ? 'Loading' : 'Login'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-appBlack"/>
                </>
            ) : null}
        </>
    );
}
