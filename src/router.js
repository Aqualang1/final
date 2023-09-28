import Login from './containers/Login/Login'
import ProductTable from './containers/ProductTable/ProductTable';
import ProductsPreview from './containers/ProductsPreview/ProductsPreview';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from './privateRoute';
import Product from './containers/Product/Product';
import NotFound from './containers/NotFound/NotFound';

const AppRouter = () => (
    <BrowserRouter >
        <Routes>

            <Route
                path='/'
                element={<Login />}
            />

            <Route
                path='/login'
                element={<Login />}
            />

            <Route
                path="*"
                element={<NotFound />}
            />

            <Route element={<PrivateRoute />}>

                <Route
                    path='/product-table'
                    element={<ProductTable />}
                />

                <Route
                    path='/products-preview'
                    element={<ProductsPreview />}
                />

                <Route
                    path='products-preview/:productId'
                    element={<Product />}
                />

            </Route>

        </Routes>
    </BrowserRouter>
)

export default AppRouter;