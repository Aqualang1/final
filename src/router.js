import Login from './containers/Login/Login'
import ProductTable from './containers/ProductTable/ProductTable';
import ProductsPreview from './containers/ProductsPreview/ProductsPreview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Product from './components/Product/Product';
import NotFound from './containers/NotFound/NotFound';

const AppRouter = () => (
    <BrowserRouter >
        <Routes>

            <Route
                path='/'
                element={<Login />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

            <Route element={<PrivateRoute />}>
                <Route
                    path='/productTable'
                    element={<ProductTable />}
                />

                <Route
                    path='/productsPreview'
                    element={<ProductsPreview />}
                />

                <Route
                    path='productsPreview/:productId'
                    element={<Product />}
                />
                
            </Route>

        </Routes>
    </BrowserRouter>
)

export default AppRouter;