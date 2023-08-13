import './ButtonsPanel.css'
import Preview from '../Preview/Preview'
import AddProduct from '../AddProduct/AddProduct'

const ButtonsPanel = () => {
    return <div className='buttonpanel'>
        <Preview />
        <AddProduct />
    </div>
}

export default ButtonsPanel;