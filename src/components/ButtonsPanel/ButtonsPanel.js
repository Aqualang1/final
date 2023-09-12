import { useNavigate } from "react-router-dom";
import './ButtonsPanel.css';
import Preview from '../Preview/Preview';
import AddProduct from '../AddProduct/AddProduct';
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';


const ButtonsPanel = ({ isLoaded, setIsLoaded, products, setProducts, newProduct, setNewProduct, createProduct }) => {
    const navigate = useNavigate();
    const [modalFormOpen, setModalFormOpen] = useState(false);






    return <div className='buttonpanel'>

        <Preview onClick={() => navigate('/products-preview')} />
        <AddProduct onClick={() => setModalFormOpen(true)} />

        <ModalForm
            open={modalFormOpen}
            closeModal={() => setModalFormOpen(false)}
            title="Add product"
            newProduct={newProduct}
            setIsLoaded={setIsLoaded}
            isLoaded={isLoaded}
            setNewProduct={setNewProduct}
            products={products}
            setProducts={setProducts}
            createProduct={createProduct}
        />
    </div>
}

export default ButtonsPanel;