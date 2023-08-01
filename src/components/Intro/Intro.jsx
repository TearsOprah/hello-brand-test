import Header from "../Header/Header.jsx";
import { useState, useEffect } from 'react';
import './Intro.css';

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

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleEscapeKeyPress);
    } else {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKeyPress);
    };
  }, [isModalOpen]);

  return (
    <div className={'intro'}>
      <Header />
      <div className={'intro__info'}>
        <p className={'intro__time'}>OPEN EVERYDAY 6AM - 9PM</p>
        <h1 className={'intro__title'}>A bad day with lunch is better than a good day without it.</h1>
        <div className={'links-block'}>
          <button className={'intro__button'} onClick={handleOpenModal}>Reserve a table</button>
          <ul className={'links-list'}>
            <li className={'hovered'}><a className={'link'}>Fb</a></li>
            <li className={'hovered'}><a className={'link'}>Ig</a></li>
            <li className={'hovered'}><a className={'link'}>Tw</a></li>
            <li className={'hovered'}><a className={'link'}>Yt</a></li>
          </ul>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={handleOutsideClick}>
          <div className="modal">
            <p>Модальное окно</p>
            <button onClick={handleCloseModal}>Закрыть</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Intro;
