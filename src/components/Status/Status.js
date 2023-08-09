import './Status.css';
import { BsCart4 } from "react-icons/bs";

const Status = () => {
    return <div className='status'>
        <BsCart4 className='icon'/>
        <p>Готовий до відправки</p>
    </div>
}

export default Status;