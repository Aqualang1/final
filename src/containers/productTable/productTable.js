import './productTable.css'
import ButtonPanel from '../buttonsPanel/buttonsPanel';
import Banner from '../banner/banner';
import TableContainer from '../tableContainer/tableContainer';
import TopLogoGreen from '../../assets/rozetkaGreen.svg';

const TableField = () => {
    return <div className='field'>
        <img src={TopLogoGreen} alt='TopLogoGreen' />
        <ButtonPanel />
        <Banner />
        <TableContainer />
    </div>
}

export default TableField;