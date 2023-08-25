import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopBox from '../TopBox/TopBox';
import './product.css';




const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});

    const API_URL = `https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/products/${params.productId}`;

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(_product => setProduct(_product));
    }, []);


    const { picture, description, price, isActive, stock, category, productName, characteristics } = product;

    if (!product) {
        return <p>loading</p>
    } else {
        return (<>
            <TopBox />
            <div className='product-details'>
                <div>{productName}</div>
                <div className='media-container'>
                    <img src={picture} alt='prod' />
                    <div>{isActive ? 'В наявності' : 'нема'}</div>
                    <div>{price}$</div>
                    <div>Кількість: {stock}</div>
                </div>

                <div><b>ОПИС:</b> {productName}</div>



                <div>
                    <p><b>{category}</b></p>
                    <p>{description}</p>
                </div>
                <div>{characteristics}</div>
            </div>
        </>)
    }



};

export default Product;