import './Table.css';
import { BsFillPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import ModalDeleteProduct from '../ModalDeleteProduct/ModalDeleteProduct';
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';

const Table = ({ product, deleteData }) => {
    const [modalOpen, setModalDeleteOpen] = useState(false);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const { id, category, description, stock, price } = product;

    const delDataAndSetModalOpen = () => {
        deleteData(id);
        setModalDeleteOpen();
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
                <BsFillPencilFill className='icon' onClick={() => setModalFormOpen(true)} />
                <BsFillArchiveFill className='icon' onClick={() => setModalDeleteOpen(true)} />
            </td>
        </tr>

        <ModalDeleteProduct
            open={modalOpen}
            closeModal={() => setModalDeleteOpen(false)}
            productId={id}
            deleteData={deleteData}
            delDataAndSetModalOpen={delDataAndSetModalOpen}
            category={category}
        />

        <ModalForm
            open={modalFormOpen}
            closeModal={() => setModalFormOpen(false)}
            title="Edit product"
            productId={id}
            description={description}
            stock={stock}
            price={price}
            category={category}
        />

    </tbody>
}

export default Table;