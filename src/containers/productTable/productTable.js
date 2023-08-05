import './productTable.css'
import ButtonPanel from '../buttonsPanel/buttonsPanel';
import Toplogo from '../topLogoBox/topLogo';
import Banner from '../banner/banner';
import TableContainer from '../tableContainer/tableContainer';

const TableField = () => {
    return <div className='field'>
        <Toplogo />
        <ButtonPanel />
        <Banner />
        <TableContainer />
    </div>
}

export default TableField;