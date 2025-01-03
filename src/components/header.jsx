import { useState } from "react"

import Logo from "../assets/logoFarmzi.svg"
import Phone from "../assets/phoneCall.svg"


const CallSection = (props) => 
    <div className="call__us">
        <img src={props.src} alt="phone" />
        <div className="call__us__block">
            <h3>{props.ahead}</h3>
            <a href={'tel:' + props.tel}>{props.tel}</a>
        </div>
    </div>
    


function Header(){
    const [isOpened, setIsOpened] = useState(true);

    return(
    <header>
        <div className="wrapper">
            <div className="header__block">
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
                <div className={!isOpened ? "header__nav opened" : "header__nav"}>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Pages</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="call__us">
                    <CallSection src={Phone} ahead='Call Us' tel='+48 535 865 229'/>
                </div>
                <div className="header__burger" onClick={() => setIsOpened(!isOpened)}>
                    <span className="burger__item"></span>
                    <span className="burger__item"></span>
                    <span className="burger__item"></span>
                </div>
            </div>
        </div>
    </header>
    )
}

export {Header, CallSection}
