import './Card.css';
import ItemDescription from '../../components/ItemDescription/ItemDescription';
import ItemProperties from '../../components/ItemProperties/ItemProperties';
import Status from '../../components/Status/Status';


const Card = ({product}) => {
    // const description = product.description;
    // const picture = product.picture;
    const { description, picture, isActive, stock, price } = product;

    return <div className='card'>
        <img src={picture} alt='laptop' />
        <ItemDescription description={description} />
        <ItemProperties price={price} stock={stock} />
        <Status isActive={isActive} />
    </div>
}

export default Card;