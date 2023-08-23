import { useParams } from 'react-router-dom';

const Product = () => {
    const params = useParams();
    return (
        <div>Chosen product is: {params.productId}</div>
    )
};

export default Product;
