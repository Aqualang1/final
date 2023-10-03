import './Preview.css'
import { BsPerson } from "react-icons/bs";

const Preview = ({onClick, ...props}) => {
    return <div className='preview' onClick={onClick}>
        <BsPerson {...props} className='icon'/>
        Preview
    </div>
}

export default Preview;