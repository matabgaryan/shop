import React from "react";
import AppNavbar from "../AppNavbar";
import {adminNavbarRoutes} from "../../../configs/routes";
import {NavbarRightSide} from "./components/NavbarRightSide";

export const AdminNavbar = () => {
    return(
        <AppNavbar routes={adminNavbarRoutes} rightSide={<NavbarRightSide />} />
    )
}
