import NavDisc from "./components/NavDisc";
import FooterDisc from "./components/FooterDisc";
import OneDiscImg from "./components/OneDiscImg";
import TwoDiscover from "./components/TwoDiscover";
import Saidbar from "./components/Saidbar";



const page = () => {
  return (
    <>
      <NavDisc/>
      <OneDiscImg/>
      <div className=" flex items-center justify-between md:flex-row flex-col  mx-auto">
        <TwoDiscover/>
        <Saidbar/>
      </div>
      <FooterDisc/>
    </>
  );
};

export default page;
