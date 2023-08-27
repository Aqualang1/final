import { useEffect, useState } from 'react';
import './TableWrapper.css'
import Table from '../Table/Table';
import { TbArrowsDownUp } from "react-icons/tb";
import API_URL from '../../constants/constants';




const TableWrapper = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(_products => setProducts(_products));
    }, []);

    return <div className='tableContainer'>
        <table className='table'>
            <thead>
                <tr>
                    <th>
                        ID
                        <TbArrowsDownUp className='icon'/>
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
            {products.map(product => <Table key={product.id} product={product} />)}
        </table>
    </div>
}

export default TableWrapper;