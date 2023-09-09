import './ProductTable.css'
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';
import Banner from '../../components/Banner/Banner';
import TableWrapper from '../../components/TableWrapper/TableWrapper';
import TopLogoGreen from '../../assets/rozetkaGreen.svg';
import { useState } from 'react';



const ProductTable = () => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [products, setProducts] = useState([]);
    const [newProduct, setNewProduct] = useState({
        category: '',
        description: '',
        stock: '',
        price: '',
    });

    return <div className='field'>
        <img id='topLogo' src={TopLogoGreen} alt='TopLogoGreen' />
        <ButtonsPanel
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
        />
        <Banner />
        <TableWrapper
            isLoaded={isLoaded}
            setIsLoaded={setIsLoaded}
            products={products}
            setProducts={setProducts}
            newProduct={newProduct}
            setNewProduct={setNewProduct}
        />
    </div>
}

export default ProductTable;