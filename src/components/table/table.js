import './Table.css'
import { BsFillPencilFill, BsFillArchiveFill } from 'react-icons/bs';

const Table = ({ product }) => {

    const { id, category, description, stock, price } = product;

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
                <BsFillArchiveFill className='icon' />
            </td>
        </tr>
    </tbody>

}

export default Table;