const Modal = (props) => {

    //Onclick function on the close secret message button
    //that will close/hide the modal.
    const closeModal = () => {
        //This will pass a value of false into this prop
        //that will be used to hide the modal
        props.closeTheModal(false);
    }

    return (
        <div className='ModalOuterContainer'>
            <div className='Modal'>
                <h1>You are so beautiful!!!</h1>
                <button onClick={closeModal}>
                    Close Secret Message
                </button>
            </div>
        </div>
    );
};

export default Modal;