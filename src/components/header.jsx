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
                <a href="#" className="logo">
                    <img src={Logo} alt="logo" />
                </a>
                <div className={!isOpened ? "header__nav opened" : "header__nav"}>
                    <ul>
                        <li><a href="#" onClick={()=>{setIsOpened(!isOpened)}}>Home</a></li>
                        <li><a href="#about" onClick={()=>{setIsOpened(!isOpened)}}>About</a></li>
                        <li><a href="#services" onClick={()=>{setIsOpened(!isOpened)}}>Services</a></li>
                        <li><a href="#blog" onClick={()=>{setIsOpened(!isOpened)}}>Blog</a></li>
                        <li><a href="#contact" onClick={()=>{setIsOpened(!isOpened)}}>Contact</a></li>
                    </ul>
                </div>
                <div className="call__us">
                    <CallSection src={Phone} ahead='Call Us' tel='+48 000 865 229'/>
                </div>
                <div className={isOpened ? "header__burger" : 'header__burger active'} onClick={() => setIsOpened(!isOpened)}>
                    <span className="burger__item first"></span>
                    <span className="burger__item second"></span>
                    <span className="burger__item third"></span>
                    <span className="burger__item fourth"></span>
                </div>
            </div>
        </div>
    </header>
    )
}

export {Header, CallSection}
