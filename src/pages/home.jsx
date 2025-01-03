import { Header } from "../components/header";
import Footer from "../components/footer";
import Intro from "../components/intro";
import AboutUs from "../components/abousUs";
import Services from "../components/services";
import CallToAction from "../components/callToAction";
import TeamMembers from "../components/teamMembers";
import VideoIntro from "../components/videoIntro";
import SliderStatistic from "../components/sliderStatistic";
import Feedback from "../components/feedback";
import TipsTricks from "../components/tipsTricks";
import Banner from "../components/banner";


const Home = () => 
    <>
        <Header/>
        <Intro/>
        <AboutUs/>
        <Services/>
        <CallToAction/>
        <TeamMembers/>
        <VideoIntro/>
        <SliderStatistic/>
        <Feedback/>
        <TipsTricks/>
        <Banner/>
        <Footer/>
    </>

export default Home