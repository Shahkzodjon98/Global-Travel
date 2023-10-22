import NavService from "./components/NavService";
import Onemain from "./components/Onemain";
import TwoSection from "./components/TwoSection";
import ThreeSection from "./components/ThreeSection";
import FourSection from "./components/FourSection";
import FiveSection from "./components/FiveSection";
import FooterService from "./components/FooterService";

const page = () => {
  return (
    <>
    <NavService/>
    <Onemain/>
    <TwoSection/>
    <ThreeSection/>
    <FourSection/>
    <FiveSection/>
    <FooterService/>
    </>
  )
}

export default page