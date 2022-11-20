import {AdminNavbar} from "../../../components/navbar/admin/AdminNavbar";
import {Outlet} from "react-router-dom";

export const AdminLayout = () => (
    <>
        <main>
            <AdminNavbar />
            <Outlet />
        </main>
    </>
);
