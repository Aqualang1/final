import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import TopBox from '../../components/TopBox/TopBox';
import Card from '../../components/Card/Card';
import './ProductsPreview.css';
import API_URL from "../../constants/constants";


const ProductsPreview = () => {

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    async function getData() {
        const response = await fetch(API_URL);
        await response.json().then(_products => setProducts(_products));
    }

    useEffect(() => {
        getData();
    }, []);


    // useEffect(() => {
    //     fetch(API_URL)
    //         .then(res => res.json())
    //         .then(_products => setProducts(_products));
    // }, []);


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