import './Card.css';
import ItemDescription from '../../components/ItemDescription/ItemDescription';
import ItemProperties from '../../components/ItemProperties/ItemProperties';
import Status from '../../components/Status/Status';


const Card = ({product}) => {
   
    const { description, picture, isActive, stock, price } = product;

    return <div className='card'>
        <img src={picture} alt='product' />
        <ItemDescription description={description} />
        <ItemProperties price={price} stock={stock} />
        <Status isActive={isActive} />
    </div>
}

export default Card;