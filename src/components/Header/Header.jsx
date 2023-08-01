import logoIcon from '../../assets/logo-light.svg';
import phoneIcon from '../../assets/phone.svg';
import './Header.css';

const Header = () => {
  return (
    <header className={'header'}>
      <img className={'header__logo'} src={logoIcon} alt={'logo tzeezotje'}/>
      <nav className={'header__nav'}>
        <ul className={'header__nav-list'}>
          <li className={'header__nav-item'}>
            <a>À la carte</a>
          </li>
          <li className={'header__nav-item'}>
            <a>Wijnkaart</a>
          </li>
          <li className={'header__nav-item'}>
            <a>Lunchmenu</a>
          </li>
          <li className={'header__nav-item'}>
            <a>Contact</a>
          </li>
        </ul>
      </nav>
      <div className={'header__phone-block'}>
        <img src={phoneIcon} alt={'phone icon'} />
        <p>+32 9 282 57 25</p>
      </div>
    </header>
  )
}

export default Header;
