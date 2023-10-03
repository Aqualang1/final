import './Table.css';
import { BsFillPencilFill, BsFillArchiveFill } from 'react-icons/bs';
// import ModalDeleteProduct from '../ModalDeleteProduct/ModalDeleteProduct';
// import { useState } from 'react';
// import ModalForm from '../ModalForm/ModalForm';
// import { deleteProduct } from '../../constants/api';

const Table = ({ product, setModalFormOpen, setModalDeleteOpen, setSelectedProduct, modalDeleteOpener, modalEditOpener}) => {

    const { id, category, description, stock, price } = product;




    return (
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
                <BsFillPencilFill className='icon' onClick={() => modalEditOpener(product)} />
                <BsFillArchiveFill className='icon' onClick={() => modalDeleteOpener(product)} />
            </td>
        </tr>
    )
}

export default Table;