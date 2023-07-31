import Header from "../Header/Header.jsx";
import './Intro.css';

const Intro = () => {
  return (
    <div className={'intro'}>
      <Header />
      <div className={'intro__info'}>
        <p className={'intro__time'}>OPEN EVERYDAY 6AM - 9PM</p>
        <h1 className={'intro__title'}>A bad day with lunch is better than a good day without it.</h1>
        <div className={'links-block'}>
          <button className={'intro__button'}>Reserve a table</button>
          <ul className={'links-list'}>
            <li><a className={'link'}>Fb</a></li>
            <li><a className={'link'}>Ig</a></li>
            <li><a className={'link'}>Tw</a></li>
            <li><a className={'link'}>Yt</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro;
