import React from 'react';
import Modal from 'react-modal';

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

function ModalDeleteProduct(props) {

    const { delDataAndSetModalOpen, afterOpenModal, closeModal, productId, open, category } = props;

    return (
        <Modal
        isOpen={open}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        >
        
        <b>Delete product ID {productId} {category} ?</b>
        <button onClick={closeModal}>close</button>
        <button onClick={() => delDataAndSetModalOpen(productId)} >Delete product</button>
        </Modal>
    );
}


export default ModalDeleteProduct;