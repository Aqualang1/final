import './Table.css';
import { BsFillPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import ModalWindow from '../Modal/Modal';
import { useState } from 'react';

const getDeleteProduct = (productId) => () => {
    console.log('going to delete product ' + productId);
}

const Table = ({ product, deleteData }) => {
    const [modalOpen, setModalOpen] = useState(false);
    const { id, category, description, stock, price } = product;

    const delDataAndSetModalOpen = () => {
        deleteData(id);
        setModalOpen();
    }

    return <tbody>
        <tr>
            <td>
                {id}
            </td>
            <td>
                {category}
            </td>
            <td>
                {description}
            </td>
            <td>
                {stock}
            </td>
            <td>
                {price}
            </td>
            <td>
                <BsFillPencilFill className='icon' />
                <BsFillArchiveFill className='icon' onClick={() => setModalOpen(true)} />
            </td>
        </tr>

        <ModalWindow
            open={modalOpen}
            closeModal={() => setModalOpen(false)}
            onConfirm={getDeleteProduct(id)}
            productId={id}
            deleteData={deleteData}
            delDataAndSetModalOpen={delDataAndSetModalOpen}
        />

    </tbody>
}

export default Table;