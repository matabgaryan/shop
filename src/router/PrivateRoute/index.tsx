import { Navigate, useLocation } from 'react-router';
import {Role, STATUS} from '../../core/enums';
import { useSelector} from "react-redux";
import {RootState} from "../../core/types";
import {checkUserRole} from "../../core/utils/roleUtils";
import {ROUTES} from "../../configs/routes";

export const PrivateRoute = ({ children, roles }: { children: JSX.Element; roles: Array<Role> }) => {
    let location = useLocation();
    const { isAuthenticated, userInfo, status } = useSelector((state: RootState) => state.auth);

    if (status === STATUS.IDLE || status === STATUS.PENDING)
        return (
            <div className="body-center container">
                <p>Loading...</p>
            </div>
        );

    const userHasRequiredRole = !!(userInfo && checkUserRole(roles, userInfo.roles));

    if (!isAuthenticated) {
        return <Navigate to={ROUTES.notFound} state={{ from: location }} />;
    }

    if (!isAuthenticated || !userHasRequiredRole) {
        return  <Navigate to={ROUTES.accessDenied} state={{ from: location }} />;
    }

    return children;
};
