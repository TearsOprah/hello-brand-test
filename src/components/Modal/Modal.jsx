import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
import Form from "../Form/Form.jsx";

const Modal = ({ isModalOpen, handleCloseModal, handleEscapeKeyPress, handleOutsideClick }) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

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

  useEffect(() => {
    if (!isModalOpen) {
      setIsFormSubmitted(false);
    }
  }, [isModalOpen]);

  const handleSubmitForm = (formData) => {
    // Отправка данных через Ajax
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Response data:', data);
        setIsFormSubmitted(true);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return isModalOpen ? (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <button className={'modal__closer hovered'} onClick={handleCloseModal}></button>
        {isFormSubmitted ? (
          <p className={'modal__success-message'}>Form submitted successfully!</p>
        ) : (
          <Form onSubmit={handleSubmitForm} />
        )}
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
