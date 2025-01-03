import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay} from 'swiper/modules';
import { useSwiper } from 'swiper/react'


import 'swiper/css';

import 'swiper/css';
import 'swiper/css/navigation';

import sliderOne from '../assets/sliderImg1.jpg'
import sliderTwo from '../assets/sliderImg2.jpg'


const SwiperNavButtons = () => {
    const swiper = useSwiper();

    return(
        <div className="swiper_nav_btns">
            <button className='prev' onClick={() => swiper.slidePrev()}></button>
            <button className='next' onClick={() => swiper.slideNext()}></button>
        </div>
    )
}


export default function SliderStatistic(){

    return(
        <div className="slider__statistic">
            <div className="wrapper">
                <div className="slider__statistic__block">
                    <div className="slider__statistic__st">
                        <div className="slider__statistic__st__item">
                            <div className="count">847 +</div>
                            <p className="upper__des">Project Done</p>
                        </div>
                        <div className="slider__statistic__st__item">
                            <div className="count">753 +</div>
                            <p className="upper__des">Happy Client</p>
                        </div>
                        <div className="slider__statistic__st__item">
                            <div className="count">284 +</div>
                            <p className="upper__des">Team Member</p>
                        </div>
                        <div className="slider__statistic__st__item">
                            <div className="count">98 +</div>
                            <p className="upper__des">Winning Award</p>
                        </div>
                    </div>
                    <div className="slider__statistic__sl">
                    <Swiper
                    // autoplay={true}
                    modules={[Navigation, Autoplay]}
                    className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={sliderOne} alt="farm image" />
                            <div className="sl__item">
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Project:</div>
                                    <h3 className="standart__h3">Farm Design</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Client:</div>
                                    <h3 className="standart__h3">Alex Milan</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Location:</div>
                                    <h3 className="standart__h3">Missisipi, USA</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sliderTwo} alt="farm image" />
                            <div className="sl__item">
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Project:</div>
                                    <h3 className="standart__h3">Lawn Design</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Client:</div>
                                    <h3 className="standart__h3">Roger Garsia</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Location:</div>
                                    <h3 className="standart__h3">Mount Sinai, USA</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sliderOne} alt="farm image" />
                            <div className="sl__item">
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Project:</div>
                                    <h3 className="standart__h3">Farm Design</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Client:</div>
                                    <h3 className="standart__h3">Alex Milan</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Location:</div>
                                    <h3 className="standart__h3">Missisipi, USA</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={sliderTwo} alt="farm image" />
                            <div className="sl__item">
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Project:</div>
                                    <h3 className="standart__h3">Lawn Design</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Client:</div>
                                    <h3 className="standart__h3">Roger Garsia</h3>
                                </div>
                                <div className="sl__item__des">
                                    <div className="sl__item__info">Location:</div>
                                    <h3 className="standart__h3">Mount Sinai, USA</h3>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperNavButtons/>        
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}