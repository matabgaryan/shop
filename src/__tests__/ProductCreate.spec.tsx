import {
    render,
    screen,
    fireEvent,
    RenderResult,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import {  MemoryRouter } from 'react-router-dom';
import {setupStore, store} from '../store/store';
import {renderWithProviders} from "../core/utils/testUtils";
import {productsData} from "../core/data/productsMockData";
import { addProducts } from "../store/slices/products";
import {CreateProduct} from "../views/admin/CreateProduct/CreateProduct";
const renderCreateProduct = (): RenderResult =>
    render(
        <Provider store={store}>
            <MemoryRouter>
                <CreateProduct  />
            </MemoryRouter>
        </Provider>
    );
describe('Create Products', () => {
    test('Take Snapshot', () => {
        const { asFragment } = renderCreateProduct();
        expect(asFragment()).toMatchSnapshot();
    });

    test('Should create  product', async () => {
        const store = setupStore();
        store.dispatch(addProducts(productsData));
        renderWithProviders( <MemoryRouter><CreateProduct  /></MemoryRouter>, {store})
        const initialLength = store.getState().products.products.length;
        expect(initialLength).toEqual(10);
        let nameInput = screen.getByPlaceholderText('Specify product name');
        expect(nameInput).toBeInTheDocument();
        fireEvent.change(nameInput, { target: { value: 'Test Product' } });
        expect(nameInput).toHaveValue('Test Product');
        let weightInput = screen.getByPlaceholderText('Weight');
        expect(weightInput).toBeInTheDocument();
        fireEvent.change(weightInput, { target: { value: '100' } });
        expect(weightInput).toHaveValue('100');
        let submitButton = screen.getByText('Add');
        fireEvent.click(
            submitButton,
            new MouseEvent('click', {
                bubbles: true,
                cancelable: true,
            })
        );
        let products = store.getState().products.products.length;
        expect(products).toBeGreaterThan(initialLength);
    });
})

