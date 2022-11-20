import {Role} from "../enums";

export const checkUserRole = (routeRoles: Role[], authenticatedUserRoles: Role[]) =>  {
    return routeRoles.some(item => authenticatedUserRoles.includes(item))
}
