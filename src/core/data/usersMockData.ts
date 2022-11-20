import {Role} from "../enums";
import {Pojo} from "../types";

export const usersMockData: Pojo = {
    user: {
        id: '1',
        username: 'user',
        email: 'user@exampl.com',
        firstName: 'John',
        lastName: 'Doe',
        roles: [Role.USER],
    },
    admin: {
        id: '2',
        username: 'admin',
        email: 'admin@exampl.com',
        firstName: 'admin',
        lastName: 'Doe',
        roles: [Role.ADMIN, Role.USER],
    },
}
