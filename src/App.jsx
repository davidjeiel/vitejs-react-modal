import { useState } from 'react';
import './App.css';
import Modal from 'react-modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Abrir</button>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        contentLabel={'Modal de exemplo'}
        overLayClassName={'modal-overlay'}
        className={'content'}
      >
        <h3>Oi sou um modal</h3>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </div>
  );
}

export default App;
