import Home from "./Home";
import Modal from "./Modal";
import React, {useState} from 'react';


function App() {

    //Use a useState to store wether the modal should be closed
    //or open
    //Starting with a value of false the modal is closed
    const [ modalOpen, setModalOpen ] = useState(false);
  return (
    <div className="App">
        <Home
            //We can retrieve the value from 
            // the Home component that we passed into
            // the prop and store it in the useState created above
            // this value was true
            openTheModal={value /*true*/ => setModalOpen(value)}
        />
        {
            modalOpen
            ?   <Modal
                    //We can retrieve the value from 
                    // the Modal component that we passed into
                    // the prop and store it in the useState created above
                    // this value was false
                closeTheModal={value /*false*/ => setModalOpen(value)}
            />
            : ''
        }
    </div>
  );
}

export default App;
