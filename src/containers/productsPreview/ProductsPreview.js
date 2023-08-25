import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import TopBox from '../../components/TopBox/TopBox';
import Card from '../../components/Card/Card';
import './ProductsPreview.css';

const API_URL = 'https://64d8eebd5f9bf5b879ceb6cd.mockapi.io/products';

const ProductsPreview = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();


    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(_products => setProducts(_products));
    }, []);


    return (
        <>
            <TopBox />
            <div className='cardsContainer'>
                {products.map(product =>
                    <Card key={product.id}
                        product={product}
                        onClick={() => navigate(`/products-preview/${product.id}`)} />)
                }
            </div>
        </>
    );
}

export default ProductsPreview;