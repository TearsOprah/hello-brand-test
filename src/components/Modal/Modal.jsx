import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Form from "../Form/Form.jsx";

const Modal = ({ isModalOpen, handleCloseModal, handleEscapeKeyPress, handleOutsideClick }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [isModalOpen, handleEscapeKeyPress]);

  const handleSubmitForm = (formData) => {
    // отправку данных через Ajax
    console.log('Sending data:', formData);
    handleCloseModal();
  };

  return isModalOpen ? (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <button className={'modal__closer hovered'} onClick={handleCloseModal}></button>
        <Form onSubmit={handleSubmitForm} />
      </div>
    </div>
  ) : null;
};

Modal.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  handleCloseModal: PropTypes.func.isRequired,
  handleEscapeKeyPress: PropTypes.func.isRequired,
  handleOutsideClick: PropTypes.func.isRequired,
};

export default Modal;
