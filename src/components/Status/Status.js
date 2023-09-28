import './Status.css';
import { BsCart4 } from "react-icons/bs";

const Status = ({ isActive }) => {
    return <div className='status'>
        <BsCart4 className='icon' />
        <p>{isActive ? 'Готовий до відправки' : 'Немає в наявності'}</p>
    </div>
}

export default Status;