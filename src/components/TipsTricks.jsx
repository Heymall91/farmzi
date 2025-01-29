import TipOne from '../assets/tipsImgOne.jpg';
import TipTwo from '../assets/tipsImgTwo.jpg';

export default function TipsTricks(){

    return(

        <section className="tips__tricks">
            <div className="wrapper">
                <div className="tips__tricks__block" id="blog">
                    <div className="ahead">
                        <p className="upper__des">
                            Latest News
                        </p>
                        <h2 className="standart__h2">Check now latest tips and tricks of gardening and <br/>
                        landscaping from blog.</h2>
                    </div>
                    <div className="tips__tricks__list">
                     <div className="tips__tricks__list__item" data-aos="zoom-in">
                        <img src={TipOne} alt="farm images" />
                        <div className="tips__tricks__list__info">
                            <div className="tips__tricks__data">
                                <span><small>Date:</small> March 23, 2022</span>
                                <span><small>By:</small> Christopher Romull</span>
                            </div>
                            <h3 className="standart__h3">
                            If You're Not Getting Your Garden<br/> 
                            Harvested Things!
                            </h3>
                            <div className="article__des">
                            Lorem Ipsum is simply dummy text the printing and<br/>
                            tpesetting industry. Lorem industry's standard dummy.
                            </div>
                        <button className='btn'>Read More +</button>
                        </div>
                     </div>
                     <div className="tips__tricks__list__item" data-aos="zoom-in">
                        <img src={TipTwo} alt="farm images" />
                        <div className="tips__tricks__list__info">
                           <div className="tips__tricks__data">
                               <span><small>Date:</small>  February 12, 2022</span>
                               <span><small>By:</small>  Rowan Bean</span>
                           </div>
                           <h3 className="standart__h3">
                            How to Plant Flowers with a Success Rate<br/>
                            of 90% or Higher!   
                           </h3>
                           <div className="article__des">
                           Lorem Ipsum is simply dummy text the printing and<br/>
                           tpesetting industry. Lorem industry's standard dummy.
                           </div>
                           <button className='btn'>Read More +</button>
                        </div>
                     </div>
                </div>
                </div>
            </div>
        </section>
    )

}