import React from "react";
import AppNavbar from "../AppNavbar";
import { appNavbarRoutes} from "../../../configs/routes";
import {NavbarRightSide} from "./components/NavbarRightSide";

export const UserNavbar = () => {
    return(
        <AppNavbar routes={appNavbarRoutes} rightSide={<NavbarRightSide />} />
    )
}
