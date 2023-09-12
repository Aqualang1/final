import React from 'react';
import Modal from 'react-modal';
import { BiX } from "react-icons/bi";
import Input from '../Input/Input';
import './modalForm.css';
import { useState } from 'react';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

function ModalForm(props) {

    const { title,
        afterOpenModal,
        closeModal,
        open,
        product: productProp,
        editProduct,
        createProduct
    } = props;

    const [product, setProduct] = useState(productProp || {
        category: '',
        description: '',
        stock: '',
        price: ''
    });

    const handleEdit = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        setProduct({
            ...product,
            [name]: value,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if ((product.category) && (product.description) && (product.price) && (product.stock)) {
            (title === "Edit product") ? editProduct(product) : createProduct(product);
            closeModal();
        } else {
            console.error("not fulfilled");
        }
    };

    return (
        <Modal
            isOpen={open}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            onSubmit={handleSubmit}

        >
            <form className='modalForm'>
                <div className='formTitle'>{title}<BiX className='icon' onClick={closeModal} /></div>
                <label htmlFor='category'>
                    Category
                </label>
                <Input
                    className={`modalInput${product.category ? " fulfilled" : " required"}`}
                    name="category"
                    type="text"
                    onChange={handleEdit}
                    required
                    value={product.category}
                />
                <p hidden={product.category}
                >This field is required
                </p>
                <label htmlFor='description'>
                    Name
                </label>
                <Input
                    className={`modalInput${product.description ? " fulfilled" : " required"}`}
                    name="description"
                    type="text"
                    onChange={handleEdit}
                    required
                    value={product.description}
                />
                <p hidden={product.description}
                >This field is required
                </p>
                <label htmlFor='stock'>
                    Quantity
                </label>
                <Input
                    className={`modalInput${product.stock ? " fulfilled" : " required"}`}
                    name="stock"
                    type="text"
                    onChange={handleEdit}
                    required
                    value={product.stock}
                />
                <p hidden={product.stock}
                >This field is required
                </p>
                <label htmlFor='price'>
                    Price
                </label>
                <Input
                    className={`modalInput${product.price ? " fulfilled" : " required"}`}
                    name="price"
                    type="text"
                    onChange={handleEdit}
                    required
                    value={product.price}
                />
                <p hidden={product.price}
                >This field is required
                </p>
                <label>
                    Dscription
                    <textarea className='modalInput'>
                    </textarea>
                </label>
                <div className='formButtons'>
                    <button type="button" onClick={closeModal}>
                        Cancel
                    </button>
                    <button type="submit" onClick={handleSubmit}>
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
}

export default ModalForm;