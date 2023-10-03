// import { useEffect, useState } from 'react';
import './TableWrapper.css'
import Table from '../Table/Table';
import { TbArrowsDownUp } from "react-icons/tb";
// import API_URL from '../../constants/constants';
// import { deleteProduct } from '../../constants/api';
import ModalDeleteProduct from "../ModalDeleteProduct/ModalDeleteProduct"
import { useState } from 'react';
import ModalForm from '../ModalForm/ModalForm';
import { deleteProduct } from '../../constants/api';


const TableWrapper = ({ products, setIsLoaded }) => {
    const [modalOpen, setModalDeleteOpen] = useState(false);
    const [modalFormOpen, setModalFormOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState();

    const modalEditOpener = (product) => {
        setSelectedProduct(product);
        setModalFormOpen(true);
    }

    const modalDeleteOpener = (product) => {
        setSelectedProduct(product);
        setModalDeleteOpen(true);
    }

    const delDataAndSetModalOpen = (product) => {
        deleteProduct(product.id)
            .then(() => setIsLoaded(false))
            .catch(error => console.log(error))
            .finally(() => setModalDeleteOpen());
    }


    return <div className='tableContainer'>
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        ID
                        <TbArrowsDownUp className='icon' />
                    </th>
                    <th>
                        Category
                        <TbArrowsDownUp className='icon' />
                    </th>
                    <th>
                        Name
                        <TbArrowsDownUp className='icon' />
                    </th>
                    <th>
                        Quantity
                        <TbArrowsDownUp className='icon' />
                    </th>
                    <th>
                        Price ($)
                        <TbArrowsDownUp className='icon' />
                    </th>
                    <th>
                    </th>
                </tr>
            </thead>
            <tbody>
                {products.map(product =>
                    <Table
                        key={product.id}
                        product={product}
                        setIsLoaded={setIsLoaded}
                        setSelectedProduct={setSelectedProduct}
                        modalEditOpener={modalEditOpener}
                        modalDeleteOpener={modalDeleteOpener}
                    />)}
            </tbody>
        </table>
        <ModalDeleteProduct
            product={selectedProduct}
            open={modalOpen}
            closeModal={() => setModalDeleteOpen(false)}
            delDataAndSetModalOpen={delDataAndSetModalOpen}
        />

        <ModalForm
            product={selectedProduct}
            open={modalFormOpen}
            closeModal={() => setModalFormOpen(false)}
            title="Edit product"
            setIsLoaded={setIsLoaded}
        />
    </div>
}

export default TableWrapper;


// async function deleteProductCall() {
//     try {
//         const response = deleteProduct(id);
//         if (response.ok) {
//             setIsLoaded(false);
//         }
//     } catch (error) {
//         console.error('An error occurred:', error);
//     }
// }