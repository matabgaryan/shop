import {
    render,
    screen,
    fireEvent,
    RenderResult, waitFor,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import {Products} from "../views";
import {setupStore, store} from '../store/store';
import {renderWithProviders} from "../core/utils/testUtils";
import {productsData} from "../core/data/productsMockData";
import { addProducts } from "../store/slices/products";

const renderProducts = (): RenderResult =>
    render(
        <Provider store={store}>
               <MemoryRouter>
                   <Products  />
               </MemoryRouter>
        </Provider>
    );
describe('Products', () => {
    test('Renders Init Products', () => {
        const { asFragment } = renderProducts();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should render products list', async () => {
        const store = setupStore();
        store.dispatch(addProducts(productsData));
        renderWithProviders( <Products  />, {store})
        const initialLength = store.getState().products.products.length;
        expect(initialLength).toEqual(10);
        const allProductsBtn = screen.getByTestId('products-show-all-btn');
        const productsFilterBtn = screen.getByTestId('products-filter-btn');
        expect(allProductsBtn).toBeInTheDocument();
        expect(productsFilterBtn).toBeInTheDocument();
        expect(allProductsBtn.classList.contains('bg-white')).toBe(false);
        expect(productsFilterBtn.classList.contains('bg-appBlack')).toBe(false)
        const productList = screen.getByTestId('products-list');
        const productItem = screen.getAllByTestId('product-item');
        expect(productList).toBeInTheDocument();
        expect(productItem).toHaveLength(10);
        fireEvent.click(allProductsBtn);
        await waitFor(() => {
            expect(allProductsBtn.classList.contains('bg-appBlack')).toBe(true);
        })
    });
})

