import React from 'react';
import Modal from 'react-modal';
import { BiX } from "react-icons/bi";
import Input from '../Input/Input';
import './modalForm.css';

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

    const { title, afterOpenModal, closeModal, stock, open, category, description, price } = props;

    return (
        <Modal
            isOpen={open}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
        >
            <form className='modalForm'>
                <div className='formTitle'>{title}<BiX className='icon' onClick={closeModal} /></div>
                <label htmlFor='category'>
                    Category
                </label>
                <Input
                    className="modalInput"
                    id="category"
                    name="category"
                    type="text"
                    // value={category}
                />
                <label htmlFor='description'>
                    Name
                </label>
                <Input
                    className="modalInput"
                    id="description"
                    name="description"
                    type="text"
                // value={description}
                />
                <label htmlFor='stock'>
                    Quantity
                </label>
                <Input
                    className="modalInput"
                    id="stock"
                    name="stock"
                    type="text"
                // value={stock}
                />
                <label htmlFor='price'>
                    Price
                </label>
                <Input
                    className="modalInput"
                    id="price"
                    name="price"
                    type="text"
                // value={price}
                />
                <label>
                    Dscription
                    <textarea className='modalInput'>
                    </textarea>
                </label>
                <div className='formButtons'>
                    <button onClick={closeModal}>
                        Cancel
                    </button>
                    <button>
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    );
}


export default ModalForm;