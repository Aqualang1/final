import { useNavigate } from "react-router-dom";
import './ButtonsPanel.css'
import Preview from '../Preview/Preview'
import AddProduct from '../AddProduct/AddProduct'

const ButtonsPanel = () => {
    const navigate = useNavigate();

    return <div className='buttonpanel'>
        <Preview onClick={() => navigate('/products-preview')} />
        <AddProduct />
    </div>
}

export default ButtonsPanel;