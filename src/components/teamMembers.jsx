import One from '../assets/photoOne.jpg'
import Two from '../assets/photoTwo.jpg'
import Three from '../assets/photoThree.jpg'


export default function TeamMembers(){

    return(
        <section className="team">
            <div className="wrapper">
                <div className="team__block">
                    <div className="ahead">
                        <p className="upper__des">Team Members</p>
                        <h2 className="standart__h2">
                            Farmzi feel proud for skilled <br/> 
                            team members.
                        </h2>
                    </div>
                    <div className="team__list">
                        <div className="team__list__item">
                            <img src={One} alt="" />
                            <p className="upper__des">Founder of Farmzi</p>
                            <h3 className="standart__h3">
                                Sylwia Kowalska
                            </h3>
                            <p className='article__des'>Lorem Ipsum is simply dummy text of the<br/>
                             printing and industry has been the indust.</p>
                        </div>
                        <div className="team__list__item">
                            <img src={Two} alt="" />
                            <p className="upper__des">Senior Gardener</p>
                            <h3 className="standart__h3">
                                Maja Żukowa
                            </h3>
                            <p className='article__des'>It is a long established fact that a reader<br/>
                             will distracted the readable content.</p>
                        </div>
                        <div className="team__list__item">
                            <img src={Three} alt="" />
                            <p className="upper__des">Garden Designer</p>
                            <h3 className="standart__h3">
                                Fatima Pekhlevi
                            </h3>
                            <p className='article__des'>There are many variations of passages<br/>
                             of Lorem Ipsum available, but the majority</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}