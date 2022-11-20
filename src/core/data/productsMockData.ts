import {generatedUuid} from "../utils/uuid";
import {IProduct} from "../../store/slices/interface";

export const productsData: IProduct[] = [
    {
        id: generatedUuid(),
        name: 'Product 1',
        price: '30',
        weight: 100,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 2',
        price: '30',
        weight: 100,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 3',
        price: '30',
        weight: 20,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 4',
        price: '30',
        weight: 30,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 5',
        price: '30',
        weight: 40,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 6',
        price: '30',
        weight: 200,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 7',
        price: '30',
        weight: 50,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 8',
        price: '30',
        weight: 100,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 9',
        price: '30',
        weight: 65,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
    {
        id: generatedUuid(),
        name: 'Product 10',
        price: '30',
        weight: 70,
        startDate: 'May 5 , 2022',
        endDate: 'Jun 5 2022',
        count: 0
    },
]
