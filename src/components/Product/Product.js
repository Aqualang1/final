import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopBox from '../TopBox/TopBox';
import './product.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidBadgeCheck, BiSolidShoppingBag } from "react-icons/bi";



const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    const API_URL = `https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/products/${params.productId}`;

    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(_product => setProduct(_product));
    }, []);


    const { picture, description, price, isActive, stock, category, productName, characteristics, more } = product;

    if (!product) {
        return <p>loading</p>
    } else {
        return (<>
            <TopBox />
            <div className='product-details'>

                <div className='title'>
                    <AiOutlineArrowLeft className='icon' onClick={() => navigate(-1)} />{productName}
                </div>

                <div className='media-container'>
                    <img src={picture} alt='prod' />
                    <div className='is-active'>

                        <div className='in-store'>
                            {isActive ? <BiSolidBadgeCheck /> : <BiSolidShoppingBag />}
                            {isActive ? 'В наявності' : 'нема'}
                        </div>

                        <div className='price'>{price}$</div>
                        <div>Кількість: {stock}</div>
                    </div>
                </div>
                <div className='more-details'>
                    <div><b>ОПИС:</b>{productName}</div>
                    <div>
                        <p><b>{category}</b></p>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p><b>{characteristics}</b></p>
                        <p>{more}</p>
                    </div>
                </div>
            </div>
        </>)
    }



};

export default Product;