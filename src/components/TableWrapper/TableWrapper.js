import { useState, useEffect } from 'react';
import './TableWrapper.css'
import Table from '../Table/Table';
import { TbArrowsDownUp } from "react-icons/tb";
import API_URL from '../../constants/constants';


const TableWrapper = () => {

    const [products, setProducts] = useState([]);



    const getData = async () => {
        const response = await fetch(API_URL);
        await response.json().then(_products => setProducts(_products));
    }

    useEffect(() => {
        getData();
    }, []);


    async function deleteData(id) {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                getData();
            } else {
                console.error('Failed to delete product');
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
            {products.map(product => <Table key={product.id} product={product} deleteData={deleteData} />)}
        </table>
    </div>
}

export default TableWrapper;