import introImg from '../assets/introImg.jpg'

export default function Intro(){
    return(
    <section className="intro">
        <div className="wrapper">
            <div className="intro__block">
                <div className="intro__des" data-aos="fade-right">
                    <p className='upper__des'>
                        Make a garden with musion.
                    </p>
                    <h2 className='standart__h2'>If you have a<br/>
                        garden and a <br/>
                        library, you have<br/>
                        everything you <br/>
                        need.<br/>
                    </h2>
                    <p className='upper__des'>
                        Markus Tullius Cicero
                    </p>
                    <button className="btn">All Services +</button>
                </div>
                <div className="intro__img" data-aos="fade-left">
                    <img src={introImg} alt="" />
                </div>
            </div>
        </div>
    </section>
    )
}