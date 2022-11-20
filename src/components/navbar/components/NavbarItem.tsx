import React, {useEffect, useState} from "react";
import { NavLink, useLocation } from "react-router-dom";
import {INavItemProps} from "../interface";

export const NavbarItem: React.FC<INavItemProps> = ( {navItem}) => {
    const [activeRoute, setActiveRoute] = useState('/')
    const routeLocation = useLocation();

    useEffect(() => {
        setActiveRoute(routeLocation.pathname)
    },[routeLocation.pathname])

    return (
        <div
            className="flex flex-col justify-center items-center"
            key={navItem.path}>
            <NavLink
                key={navItem.path}
                onClick={() => setActiveRoute(navItem.path)}
                to={navItem.path}
                className={({ isActive }) =>
                    `font-GoogleSansRegular text-base font-[18px]  hover:text-gray-900 
                    ${isActive ? 'text-appBlack' : 'text-lightGrey'}`
                }
            >
                {navItem.name}
            </NavLink>
            {
                activeRoute === navItem.path &&
                <p className="w-[14px] h-[3px] bg-purple"/>
            }
        </div>
    )
}
