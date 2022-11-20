import {
    render,
    screen,
    RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { ProductItem } from "../views/shared/Products/components/ProductItem";
import {setupStore, store} from '../store/store';
import {renderWithProviders} from "../core/utils/testUtils";
import {productsData} from "../core/data/productsMockData";
const renderProductItem = (): RenderResult =>
    render(
        <Provider store={store}>
                <ProductItem addProductToCart={() => null} product={productsData[0]} />
        </Provider>
    );
describe('Product Item cases', () => {
    test('Take Snapshot', () => {
        const { asFragment } = renderProductItem();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should render products item', async () => {
        const store = setupStore();
        renderWithProviders( <ProductItem addProductToCart={() => null} product={productsData[0]} />, {store})
        const productItem = screen.getByTestId('product-item');
        const productItemName = screen.getByTestId('product-item-name');
        expect(productItem).toBeInTheDocument();
        expect(productItemName).toBeInTheDocument();
        expect(productItemName.textContent).toEqual(productsData[0].name);
    });
})

