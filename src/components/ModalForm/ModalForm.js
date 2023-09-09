import React from 'react';
import Modal from 'react-modal';
import { BiX } from "react-icons/bi";
import Input from '../Input/Input';
import './modalForm.css';
import API_URL from '../../constants/constants';
import { useState, useEffect } from 'react';


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
        stock,
        open,
        category,
        description,
        price,
        newProduct,
        setNewProduct,
        setIsLoaded } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNewProduct({
            ...newProduct,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (Object.values(newProduct).every((el) => el.length > 0)) {
            createProduct(newProduct);
            closeModal();
        } else {
            console.error("not fulfilled");
        }

    };


    async function createProduct(newProduct) {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newProduct),
            });

            if (response.ok) {
                setIsLoaded(false);
                closeModal();
            }
        } catch (error) {
            console.error('An error occurred:', error);
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
                    <p hidden={newProduct.category}
                    >This field is required
                    </p>
                </label>
                <Input
                    className={`modalInput${newProduct.category ? ", fulfilled" : ", required"}`}
                    name="category"
                    type="text"
                    onChange={handleChange}
                    required
                />
                <label htmlFor='description'>
                    Name
                    <p hidden={newProduct.description}
                    >This field is required
                    </p>
                </label>
                <Input
                    className={`modalInput${newProduct.description ? ", fulfilled" : ", required"}`}
                    name="description"
                    type="text"
                    onChange={handleChange}
                    required
                />
                <label htmlFor='stock'>
                    Quantity
                    <p hidden={newProduct.stock}
                    >This field is required
                    </p>
                </label>
                <Input
                    className={`modalInput${newProduct.stock ? ", fulfilled" : ", required"}`}
                    name="stock"
                    type="text"
                    onChange={handleChange}
                    required
                />
                <label htmlFor='price'>
                    Price
                    <p hidden={newProduct.price}
                    >This field is required
                    </p>
                </label>
                <Input
                    className={`modalInput${newProduct.price ? ", fulfilled" : ", required"}`}
                    name="price"
                    type="text"
                    onChange={handleChange}
                    required
                />
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