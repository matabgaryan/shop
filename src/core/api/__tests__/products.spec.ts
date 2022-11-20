import {getProductsList} from "../products";
import {productsData} from "../../data/productsMockData";

test('should return products data', () => {
    return getProductsList().then(data => {
        expect(data).toBe(productsData);
    });
});
