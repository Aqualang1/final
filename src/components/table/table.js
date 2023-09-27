import './Table.css';
import { BsFillPencilFill, BsFillArchiveFill } from 'react-icons/bs';
import ModalDeleteProduct from '../ModalDeleteProduct/ModalDeleteProduct';
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import { deleteProduct } from '../../constants/api';

const Table = ({ product, setIsLoaded }) => {
    const [modalOpen, setModalDeleteOpen] = useState(false);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const { id, category, description, stock, price } = product;

    const delDataAndSetModalOpen = () => {
        deleteProduct(id).finally(() => setModalDeleteOpen());
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
            delDataAndSetModalOpen={delDataAndSetModalOpen}
            category={category}
            setIsLoaded={setIsLoaded}
        />

        <ModalForm
            open={modalFormOpen}
            closeModal={() => setModalFormOpen(false)}
            title="Edit product"
            productId={id}
            product={product}
            setIsLoaded={setIsLoaded}
        />
    </tbody>
}

export default Table;