import './Card.css';
import Laptop from '../../assets/laptop.png'
import ItemDescription from '../../components/ItemDescription/ItemDescription';
import ItemProperties from '../../components/ItemProperties/ItemProperties';
import Status from '../../components/Status/Status';

const Card = () => {

    return <div className='card'>
        <img src={Laptop} alt='laptop' />
        <ItemDescription />
        <ItemProperties />
        <Status />
    </div>
}

export default Card;