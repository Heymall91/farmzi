import gardener from '../assets/aboutUs.jpg'


export default function AboutUs(){

    return(
    <section className="about__us">
        <div className="wrapper">
            <div className="about__us__block" id="about">
                <div className="ahead">
                    <p className="upper__des">
                        About Company
                    </p>
                    <h2 className='standart__h2'>Farmzi have 35 years of experience and know<br/>
                        smart way to grow and design your beatiful<br/>
                        garden.
                    </h2>
                </div>
                <div className="about__us__des">
                    <img src={gardener} alt="gardener" />
                    <div className="about__us__article">
                        <div className="about__us__article__item">
                            <h2>Who we are?</h2>
                            <p className='article__des'>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown printer took a galley scrambled it make a type specimen book.</p>
                            <div>“Lorem Ipsum is simply dummy text of the printn industry lorem epsum has been the industry and scrambled it make a type specimen book”.</div>
                        </div>
                        <div className="about__us__article__item">
                            <h2>Mission and vision</h2>
                            <p className='article__des'>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dumm ever since the 1500s, when an unknown printer took a galley scrambled it make a type specimen book.</p>
                            <p className='article__des'>Lorem Ipsum is simply dummy text of the printing and typeset industry. Lorem Ipsum has been the industry's standard dumm scrambled it make a type specimen book.</p>
                        </div>
                        <button className="btn">Learn More +</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}