import './buttonsPanel.css'
import Preview from '../../components/preview/preview'
import AddProduct from '../../components/addProduct/addProduct'

const ButtonPanel = () => {
    return <div className='buttonpanel'>
        <Preview />
        <AddProduct />
    </div>
}

export default ButtonPanel;