import React from "react";
import AppIcon from "../../../assets/icons/appLogo.png";
import {Link} from "react-router-dom";
import {IMobileNavbarProps} from "../interface";
import {CloseIcon} from "../../icons/CloseIcon";

export const MobileNavbar: React.FC<IMobileNavbarProps> = ({open, setOpen, routes}) => {

    return(
        <div
            className={
                open
                    ? "opacity-100 z-1024 scale-100 transition ease-out duration-200 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                    : "opacity-0 scale-95 absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            }
        >
            <div className="rounded-lg shadow-lg ring-1 ring-appBlack ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                    <div className="flex items-center justify-between">
                        <div>
                            <img
                                className="h-8 w-auto"
                                src={AppIcon}
                                alt="Workflow"
                            />
                        </div>
                        <div className="-mr-2">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Close menu</span>
                                <CloseIcon />
                            </button>
                        </div>
                    </div>
                    <div className="mt-6">
                        <nav className="grid gap-y-8">
                            {
                                routes.map((item) => {
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                                        >
                                        <span className="ml-3 text-base font-medium text-gray-900">
                                          {item.name}
                                        </span>
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
