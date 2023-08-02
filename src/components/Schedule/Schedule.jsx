import './Schedule.css';
import scheduleImg from '../../assets/schedule-image.png';

const Schedule = () => {
  return (
    <section id={'schedule'} className={'schedule'}>

      <ul className={'schedule__list'}>
        <li className={'schedule__list-item'}>
          <p className={'schedule__day'}>Woensdag 12/01</p>
          <div className={'schedule__menu'}>
            <p className={'schedule__dish'}>Salade met Serrano</p>
            <div className={'circle-block'}>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
            </div>
            <p className={'schedule__dish'}>Steak Tartaar</p>
          </div>
        </li>

        <li className={'schedule__list-item'}>
          <p className={'schedule__day'}>Donderdag 13/01</p>
          <div className={'schedule__menu'}>
            <p className={'schedule__dish'}>Toast Roquefort</p>
            <div className={'circle-block'}>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
            </div>
            <p className={'schedule__dish'}>Penne met Kip en Prei</p>
          </div>
        </li>

        <li className={'schedule__list-item'}>
          <p className={'schedule__day'}>Vrijdag 14/01</p>
          <div className={'schedule__menu'}>
            <p className={'schedule__dish'}>Verrassing van de Chef</p>
            <div className={'circle-block'}>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
            </div>
            <p className={'schedule__dish'}>Penne met Kip en Prei</p>
          </div>
        </li>

        <li className={'schedule__list-item'}>
          <p className={'schedule__day'}>Vrijdag 15/01</p>
          <div className={'schedule__menu'}>
            <p className={'schedule__dish'}>Verrassing van de Chef</p>
            <div className={'circle-block'}>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
            </div>
            <p className={'schedule__dish'}>Penne met Kip en Prei</p>
          </div>
        </li>

        <li className={'schedule__list-item'}>
          <p className={'schedule__day'}>Vrijdag 16/01</p>
          <div className={'schedule__menu'}>
            <p className={'schedule__dish'}>Verrassing van de Chef</p>
            <div className={'circle-block'}>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
              <div className={'circle'}></div>
            </div>
            <p className={'schedule__dish'}>Penne met Kip en Prei</p>
          </div>
        </li>
      </ul>

      <img className={'schedule__image'} src={scheduleImg} alt={'photo Tzeezotje'} />

    </section>
  )
}

export default Schedule;
