import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, Autoplay } from 'swiper/modules';
import './ReviewsSwiper.css';
import quoteIcon from '../../assets/quote.svg'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

const ReviewsSwiper = () => {
  return (
    <Swiper className={'reviews-swiper'}
      modules={[Navigation, A11y, Autoplay]}
      slidesPerView={1}
      navigation={{
        prevEl: '.custom-button.backward',
        nextEl: '.custom-button.forward',
      }}
      loop={true}
      autoplay={{ delay: 3000 }}
    >
      <SwiperSlide>
        <div className={'slide'}>
          <img className={'slide__icon'} src={quoteIcon} alt={'quote icon'} />
          <p className={'slide__title'}>Goede service, lekker eten, toffe ambiance</p>
          <p className={'slide__text'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum. Stet clita kasd gubergren.</p>
          <p className={'slide__author'}>ALAIN HEYNDRICKX</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={'slide'}>
          <img className={'slide__icon'} src={quoteIcon} alt={'quote icon'} />
          <p className={'slide__title'}>Goede service, lekker eten, toffe ambiance</p>
          <p className={'slide__text'}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo  dolores et ea rebum. Stet clita kasd gubergren.</p>
          <p className={'slide__author'}>ALAIN HEYNDRICKX</p>
        </div>
      </SwiperSlide>

      <svg className={'custom-button backward'} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <path d="M43.8958 11.9L24.8791 30.9166C22.6333 33.1625 22.6333 36.8375 24.8791 39.0833L43.8958 58.1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

      <svg className={'custom-button forward'} xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
        <path d="M26.1042 11.9L45.1209 30.9166C47.3667 33.1625 47.3667 36.8375 45.1209 39.0833L26.1042 58.1" stroke="white" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>

    </Swiper>
  );
};

export default ReviewsSwiper;
