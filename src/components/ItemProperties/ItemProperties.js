import './ItemProperties.css'

const ItemProperties = ({price, stock}) => {
    return <div className='itemProperties'>
    <p className='cost'>{price}₴</p>
    <p className='quantity'>Кількість: {stock}</p>
    </div>
}

export default ItemProperties;