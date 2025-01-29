import One from '../assets/bannerImg/image1.png'
import Two from '../assets/bannerImg/image2.png'
import Three from '../assets/bannerImg/image3.png'
import Four from '../assets/bannerImg/image4.png'
import Five from '../assets/bannerImg/image5.png'

import Slider from 'react-infinite-logo-slider'

export default function Banner(){

    return(
        <div className="banner">
            <div className="wrapper">
                <div className="banner__block">
                    <div className="banner__line">
                    <Slider
                    width="250px"
                    duration={40}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                    >
                        <Slider.Slide>
                            <img src={One} alt="one" className='item' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={Two} alt="two" className='item' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={Three} alt="three" className='item' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={Four} alt="four" className='item' />
                        </Slider.Slide>
                        <Slider.Slide>
                            <img src={Five} alt="five" className='item' />
                        </Slider.Slide>
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}