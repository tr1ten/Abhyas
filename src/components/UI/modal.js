import Modal from 'react-modal';
import React from "react";
import Button from './button';

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

const MModal = (props) => {
    // const el = document.getElementById('#root');

    function afterOpenModal() {
        
        // references are now sync'd and can be accessed.
        return;
    }



    return (
        <Modal
            isOpen={props.openModal}
            onAfterOpen={afterOpenModal}
            onRequestClose={props.onClose}
            style={customStyles}
            contentLabel="do's and don'ts"
        >
            <div className="text-center p-3 m-0 w-full bg-gray-400 text-black font-semibold">
                <h3 className="inline">{props.title}</h3>
            </div>
            {props.children}
            <Button onClick={props.onClickHandler} className="bg-primary w-full p-3 text-white">
                {props.btntxt}
            </Button>
        </Modal>

    );
}
export default MModal;