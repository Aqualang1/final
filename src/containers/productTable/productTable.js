import './ProductTable.css'
import ButtonsPanel from '../../components/ButtonsPanel/ButtonsPanel';
import Banner from '../../components/Banner/Banner';
import TableWrapper from '../../components/TableWrapper/TableWrapper';
import TopLogoGreen from '../../assets/rozetkaGreen.svg';



const ProductTable = () => {
    return <div className='field'>
        <img id='topLogo' src={TopLogoGreen} alt='TopLogoGreen' />
        <ButtonsPanel />
        <Banner />
        <TableWrapper />
    </div>
}

export default ProductTable;