import { productsData } from '../data/productsMockData'
import {IProduct} from "../../store/slices/interface";

export const getProductsList: () => Promise<IProduct[]> = () => {
    return  new Promise((resolve) => {
        setTimeout(() => resolve(productsData), 250);
    });
}
