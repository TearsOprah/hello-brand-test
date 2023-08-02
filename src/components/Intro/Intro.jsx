import Header from "../Header/Header.jsx";
import { useState } from 'react';
import './Intro.css';
import Modal from "../Modal/Modal.jsx";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleEscapeKeyPress = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal();
    }
  };

  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      handleCloseModal();
    }
  };

  return (
    <div className="intro">
      <Header />
      <div className="intro__info">
        <p className="intro__time">OPEN EVERYDAY 6AM - 9PM</p>
        <h1 className="intro__title">A bad day with lunch is better than a good day without it.</h1>
        <div className="links-block">
          <button className="intro__button" onClick={handleOpenModal}>
            Reserve a table
          </button>
          <ul className="links-list">
            <li className="hovered">
              <a className="link">Fb</a>
            </li>
            <li className="hovered">
              <a className="link">Ig</a>
            </li>
            <li className="hovered">
              <a className="link">Tw</a>
            </li>
            <li className="hovered">
              <a className="link">Yt</a>
            </li>
          </ul>
        </div>
      </div>

      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
        handleEscapeKeyPress={handleEscapeKeyPress}
        handleOutsideClick={handleOutsideClick}
      />
    </div>
  );
};

export default Intro;
