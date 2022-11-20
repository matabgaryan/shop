import {usersMockData} from '../data/usersMockData'
import {IUser} from "../../store/slices/interface";

export const getUser = (userPrefix: string) => {
   return  new Promise((resolve) => {
        setTimeout(() => resolve(usersMockData[userPrefix]), 250);
    });
}

export const userLogin: (userPrefix: string) => Promise<IUser> = (userPrefix) => {
    return  new Promise((resolve) => {
        setTimeout(() =>{
            localStorage.setItem("user", JSON.stringify(usersMockData[userPrefix]));
            resolve(usersMockData[userPrefix])
        }, 500);
    });
}

