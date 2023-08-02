import { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

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

  return isModalOpen ? (
    <div className="modal-overlay" onClick={handleOutsideClick}>
      <div className="modal">
        <p>Модальное окно</p>
        <button onClick={handleCloseModal}>Закрыть</button>
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
