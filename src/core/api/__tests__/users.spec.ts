import {getUser, userLogin} from "../users";
import {PREFIX_USER, PREFIX_ADMIN} from "../../../constants/appConstants";
import {usersMockData} from "../../data/usersMockData";

describe('user api', () => {
    test('should return user', () => {
        return getUser(PREFIX_USER).then(data => {
            expect(data).toBe(usersMockData[PREFIX_USER]);
        });
    });

    test('should return admin', () => {
        return getUser(PREFIX_ADMIN).then(data => {
            expect(data).toBe(usersMockData[PREFIX_ADMIN]);
        });
    });

    test('should login as admin', () => {
        return userLogin(PREFIX_ADMIN).then(data => {
            expect(data).toBe(usersMockData[PREFIX_ADMIN]);
            expect(localStorage.getItem('user')).toBeDefined()
        });
    });
})

