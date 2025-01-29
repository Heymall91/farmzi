import Logo from "../assets/logoFarmzi.svg"
import Phone from "../assets/phoneCall.svg"
import { CallSection } from "./Header"


export default function Footer(){
    return (
    <footer>
        <div className="wrapper">
            <div className="footer__block">
                <div className="footer__info">
                    <div className="footer__info__item">
                        <h1>Explore</h1>
                        <ul>
                            <li>About us</li>
                            <li>FAQ</li>
                            <li>Press & Blog</li>
                        </ul>
                    </div>
                    <div className="footer__info__item">
                        <h1>Information</h1>
                        <ul>
                            <li>Style Guide</li>
                            <li>Change Log</li>
                            <li>Licence</li>
                        </ul>
                    </div>
                    <div className="footer__info__item">
                        <h1>Service</h1>
                        <ul>
                            <li>Flower</li>
                            <li>Planting</li>
                            <li>Watering</li>
                        </ul>
                    </div>
                </div>
                <div className="footer__des">
                    <a href="#" className="logo">
                        <img src={Logo} alt="logo" />
                    </a>
                    <p>Lorem Ipsum is simply dummy text of the<br/>
                    printing and typeset industry has been<br/>
                    the industry's standard.</p>
                    <div className="call__us">
                        <CallSection src={Phone} ahead='Call Us' tel='+48 000 865 229'/>
                </div>
                </div>
            </div>
        </div>
        </footer>
    )
}