import { useState } from 'react';
import Modal from 'react-modal';

import './CalendarModal.css';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [modalStatus, setModalStatus] = useState(true);

  const onCloseModal = () => {
    setModalStatus(false);
  };

  return (
    <Modal
      isOpen={modalStatus}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel="Example Modal"
      className="modal"
      overlayClassName="modal-fondo"
      closeTimeoutMS={400}
    >
      <h1>Hola Mundo</h1>
      <hr />
      <p>
        Qui velit voluptate reprehenderit voluptate duis proident ex. Minim duis dolore esse ea duis
        id nulla excepteur Lorem quis sint. Magna ut fugiat ut cupidatat quis consectetur Lorem. Ex
        fugiat velit proident deserunt voluptate ipsum veniam nisi. Proident excepteur enim
        consequat adipisicing. Eu do amet do proident occaecat cupidatat mollit in.
      </p>
    </Modal>
  );
};
