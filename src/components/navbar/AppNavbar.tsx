import React, { useMemo } from "react";
import {MobileNavbar} from "./components/MobileNavbar";
import {HamburgIcon} from "../icons/HamburgIcon";
import {IAppNavbarProps} from "./interface";
import {NavbarItem} from "./components/NavbarItem";
import {AppLogo} from "./components/AppLogo";

const AppNavbar: React.FC<IAppNavbarProps> = ({rightSide, routes}) => {
    const [open, setOpen] = React.useState(false);

    const renderNavItems = useMemo(() => (
        routes.map((item) => <NavbarItem key={item.path} navItem={item} />)
    ),[routes])

    return (
        <>
            <div className="relative bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
                        <AppLogo />
                        <div className="-mr-2 -my-2 md:hidden">
                            <button
                                type="button"
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                onClick={() => setOpen(!open)}
                            >
                                <span className="sr-only">Open menu</span>
                                <HamburgIcon />
                            </button>
                        </div>
                        <nav className="hidden md:flex space-x-10">
                            {renderNavItems}
                        </nav>
                        {rightSide}
                    </div>
                </div>
                <MobileNavbar open={open} setOpen={setOpen} routes={routes} />
            </div>
        </>
    );
};

export default AppNavbar


