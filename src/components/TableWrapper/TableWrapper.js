// import { useEffect, useState } from 'react';
import './TableWrapper.css'
import Table from '../Table/Table';
import { TbArrowsDownUp } from "react-icons/tb";
import API_URL from '../../constants/constants';

const TableWrapper = ({ isLoaded, setIsLoaded, products, setNewProduct, editProduct }) => {

    async function deleteProduct(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                setIsLoaded(false);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
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
            {products.map(product =>
                <Table
                    key={product.id}
                    product={product}
                    deleteProduct={deleteProduct}
                    setNewProduct={setNewProduct}
                    isLoaded={isLoaded}
                    setIsLoaded={setIsLoaded}
                    editProduct={editProduct}
                />)}
        </table>
    </div>
}

export default TableWrapper;