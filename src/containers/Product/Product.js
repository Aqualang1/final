import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import TopBox from '../../components/TopBox/TopBox';
import './product.css';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSolidBadgeCheck, BiSolidShoppingBag } from "react-icons/bi";
import API_URL from '../../constants/constants';




const Product = () => {
    const params = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const productId = params.productId;

    async function getData() {
        const response = await fetch(API_URL + '/' + productId);
        await response.json().then(_product => setProduct(_product));
    }

    useEffect(() => {
        getData();
    }, []);

    const { picture, description, price, isActive, stock, category, productName, characteristics, more } = product;

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
};

export default Product;