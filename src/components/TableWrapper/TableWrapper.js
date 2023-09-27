// import { useEffect, useState } from 'react';
import './TableWrapper.css'
import Table from '../Table/Table';
import { TbArrowsDownUp } from "react-icons/tb";
// import API_URL from '../../constants/constants';
// import { deleteProduct } from '../../constants/api';

const TableWrapper = ({ products, setIsLoaded }) => {

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
                    setIsLoaded={setIsLoaded}
                />)}
        </table>
        
    </div>
}

export default TableWrapper;