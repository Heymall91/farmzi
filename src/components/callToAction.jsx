import { CallSection } from "./header"
import Phone from "../assets/phoneCall.svg"


export default function CallToAction(){

    return(
        <div className="call__to__action">
            <div className="wrapper">
                <div className="call__to__action__block" id="contact" data-aos="fade-up" data-aos-duration="5000">
                    <div className="ahead">
                        <p className="upper__des">Call To Action</p>
                        <h2 className="standart__h2">
                            If you need any gardening<br/>
                            service, you can contact with<br/>
                            Farmzi.
                        </h2>
                    </div>
                    <CallSection src={Phone} ahead='Our Services' tel='+00 89 458 648' />
                </div>
            </div>
        </div>
    )
}