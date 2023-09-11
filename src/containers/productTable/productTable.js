import './ProductTable.css'
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';
import Banner from '../../components/Banner/Banner';
import TableWrapper from '../../components/TableWrapper/TableWrapper';
import TopLogoGreen from '../../assets/rozetkaGreen.svg';
import { useState, useEffect } from 'react';
import API_URL from '../../constants/constants';



const ProductTable = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        category: '',
        description: '',
        stock: '',
        price: '',
    });

    useEffect(() => {
        if (!isLoaded) {
            getData();
        }
    }, [isLoaded]);

    const getData = async () => {
        try {
            const response = await fetch(API_URL);
            const products = await response.json();
            setProducts(products);
        } catch (error) {
            console.error("not loaded", error);
        }
        setIsLoaded(true);
    }

    async function editProduct(product) {
        try {
            const response = await fetch(`${API_URL}/${product.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product)
            });

            if (response.ok) {
                setIsLoaded(false);
                return await response.json();
            }
        } catch (error) {
            console.error('editProduct error occurred:', error);
        }
    }

    async function createProduct(product) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            });

            if (response.ok) {
                setIsLoaded(false);
                const responseData = await response.json();
                return responseData;
            }
        } catch (error) {
            console.error('createProduct error occurred:', error);
        }
    }


    return <div className='field'>
        <img id='topLogo' src={TopLogoGreen} alt='TopLogoGreen' />
        <ButtonsPanel
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            createProduct={createProduct}
        />
        <Banner />
        <TableWrapper
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            products={products}
            setProducts={setProducts}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
            editProduct={editProduct}
        />
    </div>
}

export default ProductTable;