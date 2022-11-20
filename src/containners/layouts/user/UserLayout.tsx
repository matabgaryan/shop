import {UserNavbar} from "../../../components/navbar/user/UserNavbar";
import {Outlet} from "react-router-dom";

export const UserLayout = () => (
    <>
        <main>
            <UserNavbar />
            <Outlet />
        </main>
    </>
);
