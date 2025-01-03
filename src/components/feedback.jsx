import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard} from 'swiper/modules';
// import { useSwiper } from 'swiper/react'


import 'swiper/css';

import 'swiper/css';
import 'swiper/css/keyboard';



export default function Feedback(){

    return(

        <div className="feedback">
            <div className="wrapper">
                <div className="feedback__block">
                    <div className="ahead">
                        <p className="upper__des">Happy Clients</p>
                        <h2 className="standart__h2">Farmzi got best feedback from happy clients</h2>
                    </div>
                    <div className="feedback__posts">
                    <Swiper
                    spaceBetween={60}
                    slidesPerView={2}
                    autoplay={true}
                    loop={true}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                        },
                        920: {
                            slidesPerView: 2,
                        }
                    }}
                    modules={[Keyboard, Autoplay]}
                    className="mySwiper__feedback"
                    >

                        <SwiperSlide>
                            <div className="feedback__posts__item">
                                <div className="feedback__posts__comment">
                                “Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book
                                </div>
                                <p className="upper__des">Designer of Musion</p>
                                <h3 className="standart__h3">Rachel Patterson</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__posts__item">
                                <div className="feedback__posts__comment">
                                “Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book
                                </div>
                                <p className="upper__des">SEO of Musion</p>
                                <h3 className="standart__h3">Tanjito Kamado</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__posts__item">
                                <div className="feedback__posts__comment">
                                “Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book
                                </div>
                                <p className="upper__des">Senior Marketer of Musion</p>
                                <h3 className="standart__h3">Nikanor Onacki</h3>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="feedback__posts__item">
                                <div className="feedback__posts__comment">
                                “Lorem Ipsum is simply dummy text the printing and typesetting industry. Lorem has been the industry's standard dummy text since the 1500 when an unknown printer took galley type and scram bled it make a type specimen book
                                </div>
                                <p className="upper__des">Founder of Musion</p>
                                <h3 className="standart__h3">Jean d'Foreaux</h3>
                            </div>
                        </SwiperSlide>
               
                    </Swiper>
                    </div>
                </div>
            </div>
        </div>
        
    )
}