const Home = ( props ) => {

    //Onclick function on the Open secret message button
    //that will open/show the modal.
    const open = () => {
        //This will pass a value of true into this prop
        //that will be used to show the modal
        props.openTheModal(true);
    }
    return (
        <>
            <h1>Place of many secrets</h1>
            <button onClick={open}>
                Open secret message
            </button>
        </>
    );
};

export default Home;