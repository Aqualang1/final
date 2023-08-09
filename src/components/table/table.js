import './table.css'
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillArchiveFill } from "react-icons/bs";
import { TbArrowsDownUp } from "react-icons/tb";

const Table = () => {
    return <table className='table'>
        <thead>
            <tr>
                <th>
                    ID
                    <TbArrowsDownUp />
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
            <tr>
                <td>
                    0
                </td>
                <td>
                    PC
                </td>
                <td>
                    Lenovo Y50-70
                </td>
                <td>
                    5
                </td>
                <td>
                    25000,00
                </td>
                <td>
                    <BsFillPencilFill className='icon' />
                    <BsFillArchiveFill className='icon' />
                </td>
            </tr>
            <tr>
                <td>
                    1
                </td>
                <td>
                    Clothes
                </td>
                <td>
                    Nike M NK Acd21
                </td>
                <td>
                    22
                </td>
                <td>
                    4000,00
                </td>
                <td>
                    <BsFillPencilFill className='icon' />
                    <BsFillArchiveFill className='icon' />
                </td>
            </tr>
            <tr>
                <td>
                    2
                </td>
                <td>
                    Plumbing
                </td>
                <td>
                    CERSANIT MITO 17
                </td>
                <td>
                    1337
                </td>
                <td>
                    5000,00
                </td>
                <td>
                    <BsFillPencilFill className='icon' />
                    <BsFillArchiveFill className='icon' />
                </td>
            </tr>
        </tbody>
    </table>
}

export default Table;