import {ROUTES} from '../configs/routes';
import {Role} from '../core/enums';
import {Route, Routes} from 'react-router-dom';
import {AdminDashboard, HomePage, NotFound, Products, AdminLogin} from '../views';
import {PrivateRoute} from './PrivateRoute';
import {PublicRoute} from './PublicRoute';
import { AdminLayout, UserLayout } from "../containners/layouts";
import AccessDenied from "../views/shared/AccessDenied";
import {CreateProduct} from "../views/admin/CreateProduct/CreateProduct";

export const Router = () => {

    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route
                    path={ROUTES.accessDenied}
                    element={
                        <PublicRoute>
                            <AccessDenied />
                        </PublicRoute>
                    }
                />
            </Route>
            <Route element={<UserLayout />}>
                <Route
                    path={ROUTES.shop}
                    element={
                        <PublicRoute>
                            <Products />
                        </PublicRoute>
                    }
                />
            </Route>
            <Route element={<UserLayout />}>
                <Route
                    path={ROUTES.home}
                    element={
                        <PublicRoute>
                            <HomePage />
                        </PublicRoute>
                    }
                />
            </Route>
            <Route element={<AdminLayout />}>
                <Route
                    path={ROUTES.adminDashboard}
                    element={
                        <PrivateRoute roles={[Role.ADMIN]}>
                            <AdminDashboard />
                        </PrivateRoute>
                    }
                />
            </Route>
            <Route element={<AdminLayout />}>
                <Route
                    path={ROUTES.adminProducts}
                    element={
                        <PrivateRoute roles={[Role.ADMIN]}>
                            <Products />
                        </PrivateRoute>
                    }
                />
            </Route>
            <Route element={<AdminLayout />}>
                <Route
                    path={ROUTES.createProduct}
                    element={
                        <PrivateRoute roles={[Role.ADMIN]}>
                            <CreateProduct />
                        </PrivateRoute>
                    }
                />
            </Route>
            <Route
                path={ROUTES.adminLogin}
                element={
                    <PublicRoute>
                        <AdminLogin />
                    </PublicRoute>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
