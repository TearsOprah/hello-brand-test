import logoIcon from '../../assets/logo-light.svg';
import phoneIcon from '../../assets/phone.svg';
import './Header.css';
import { useState, useEffect } from 'react';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      closeMenu();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
      <img className={'header__logo'} src={logoIcon} alt={'logo tzeezotje'}/>
      <nav className="navigation">
        <div className={`navigation__container ${isMenuOpen ? 'navigation__container_active' : ''}`}>
          {isMenuOpen && <button className="close-button" onClick={closeMenu}>Закрыть</button>}
          <ul className={'navigation__list'}>
            <li className="navigation__item"><a>À la carte</a></li>
            <li className="navigation__item"><a>Wijnkaart</a></li>
            <li className="navigation__item"><a>Lunchmenu</a></li>
            <li className="navigation__item"><a>Contact</a></li>
          </ul>
          {isMenuOpen &&
            <div className={'header__phone-block'}>
              <img src={phoneIcon} alt={'phone icon'} />
              <p>+32 9 282 57 25</p>
            </div>
          }
        </div>
        <button className={`burger-button`} onClick={toggleMenu}>Меню</button>
        {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}
      </nav>
      {!isMenuOpen &&
        <div className={'header__phone-block header__phone-block_hidden'}>
          <img src={phoneIcon} alt={'phone icon'} />
          <p>+32 9 282 57 25</p>
        </div>
      }
    </header>
  );
};

export default Header;
