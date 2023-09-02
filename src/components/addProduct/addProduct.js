import './AddProduct.css'
import { AiOutlinePlus } from "react-icons/ai";



const AddProduct = (props) => {
    
    const {onClick} = props;

    return <div onClick={onClick} className='addProduct'>
        <AiOutlinePlus className='icon' />
        Add product
    </div>
}

export default AddProduct;