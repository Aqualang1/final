import { useNavigate } from "react-router-dom";
import './ButtonsPanel.css';
import Preview from '../Preview/Preview';
import AddProduct from '../AddProduct/AddProduct';
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';



const ButtonsPanel = ({ setIsLoaded }) => {
    const navigate = useNavigate();
    const [modalFormOpen, setModalFormOpen] = useState(false);

    return <div className='buttonpanel'>

        <Preview onClick={() => navigate('/products-preview')} />
        <AddProduct onClick={() => setModalFormOpen(true)} />

        <ModalForm
            open={modalFormOpen}
            closeModal={() => setModalFormOpen(false)}
            title="Add product"
            setIsLoaded={setIsLoaded}
        />
    </div>
}

export default ButtonsPanel;