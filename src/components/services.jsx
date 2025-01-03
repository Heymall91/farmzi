import { useState } from 'react'

import Flower from '../assets/flower.jpg'
import Planting from '../assets/planting.jpg'
import Rush from '../assets/rush.jpg'
import Watering from '../assets/watering.jpg'
import Arrow from '../assets/arrowUp.svg'

export default function Services(){
    const [isHide, setHide] = useState(false);
    // const [isClosed, setIsClosed] = useState('More Services +');


    return(
        <section className="services">
            <div className="wrapper">
                <div className="services__block">
                    <div className="ahead">
                        <p className="upper__des">Our Services</p>
                        <h2 className="standart__h2">Farmzi always provide amazing gardening and landscaping services.</h2>
                    </div>
                    <div className="services__list">
                        <div className="services__list__item">
                            <img src={Flower} alt="flower" />
                            <p className="upper__des">Flower</p>
                            <h3 className='standart__h3'>Flower Planting</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Planting} alt="planting" />
                            <p className="upper__des">Planting</p>
                            <h3 className='standart__h3'>Planting</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Rush} alt="rush" />
                            <p className="upper__des">Rush</p>
                            <h3 className='standart__h3'>Rush Removal</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Watering} alt="watering" />
                            <p className="upper__des">Watering</p>
                            <h3 className='standart__h3'>Garden Watering</h3>
                        </div>
                    </div>
                    <div className={!isHide ? "services__list hidden" : "services__list"}>
                        <div className="services__list__item">
                            <img src={Watering} alt="watering" />
                            <p className="upper__des">Watering</p>
                            <h3 className='standart__h3'>Garden Watering</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Rush} alt="rush" />
                            <p className="upper__des">Rush</p>
                            <h3 className='standart__h3'>Rush Removal</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Planting} alt="planting" />
                            <p className="upper__des">Planting</p>
                            <h3 className='standart__h3'>Planting</h3>
                        </div>
                        <div className="services__list__item">
                            <img src={Flower} alt="flower" />
                            <p className="upper__des">Flower</p>
                            <h3 className='standart__h3'>Flower Planting</h3>
                        </div>
                    </div>
                    <button className='btn' onClick={() => setHide(!isHide)}>{isHide ? "Hide" : "More Services +"}</button>
                </div>
            </div>
        </section>
    )
}