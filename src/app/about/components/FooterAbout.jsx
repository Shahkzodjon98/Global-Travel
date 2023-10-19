import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const FooterAbout = () => {
  return (
    <div>
    <footer className="w-full h-auto bg-teal-900 flex-col mx-auto">
<div className="   flex item-center justify-center py-10 ">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-10">
    <div className="space-y-6">
      <h2 className="text-white text-[33.18px] font-normal font-['Poppins'] leading-10 ">
        Travelaja
      </h2>
      <p className=" md:w-full w-[281px] text-white text-base font-normal font-['Poppins']">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla
        urna, porttitor rhoncus dolor purus non enim praesent elementum
        facilisis leo, vel
      </p>
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-xl font-bold font-['Poppins'] capitalize leading-[34.56px]">
          ShaxzodErkinov
        </h1>
        <div className="flex items-center flex-row gap-5 text-[#FFFFFF] text-[24px]">
          <BsInstagram />
          <BsFacebook />
          <BsTwitter />
          <BsGithub />
        </div>
      </div>
    </div>

    <div className=" space-y-4 md:mx-24 md:my-0 my-10">
      <h2 className="text-white text-xl font-bold font-['Poppins'] space-y-4  capitalize leading-[34.56px]">
        links
      </h2>
      <ul className="text-[#bdbbbb]  text-base font-normal font-['Poppins'] ">
        <li className="hover:text-white">
          <a href="#">Discover</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Special Deals</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Services</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Community</a>
        </li>
        <li className="hover:text-white">
          <a href="#">About Us</a>
        </li>
      </ul>
    </div>
    <div className=" space-y-4">
      <h2 className="text-white text-xl font-bold font-['Poppins'] capitalize leading-[34.56px]">
        Services
      </h2>
      <ul className="text-[#bdbbbb]  text-base font-normal font-['Poppins'] ">
        <li className="hover:text-white">
          <a href="#">About Us</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Blog & Articles</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Term and Condition</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Privacy Policy</a>
        </li>
        <li className="hover:text-white">
          <a href="#">Contact Us</a>
        </li>
      </ul>
    </div>
    <div className="space-y-4 text-center md:my-0 my-10">
      <h2 className="text-white text-xl font-bold font-['Poppins'] capitalize leading-[34.56px]">
        Contact
      </h2>
      <p className="text-[#bdbbbb] hover:text-white text-base font-normal font-['Poppins']">
        Address: Jl.Codelaras No.205A
      </p>
      <p className="text-[#bdbbbb] hover:text-white text-base font-normal font-['Poppins']">
        Kediri, Pare AG17
      </p>
      <p className="text-[#bdbbbb] hover:text-white text-base font-normal font-['Poppins']">
        <a href="tel:+998971415544">Phone: 97 141 55 44</a>
      </p>
      <p className="text-[#bdbbbb] hover:text-white text-base font-normal font-['Poppins']">
        <a href="mailto:shakhzoderkinov98@gmail.com">
          Email: shakhzoderkinov98@gmail.com
        </a>
      </p>
      <p className="text-[#bdbbbb] hover:text-white text-base font-normal font-['Poppins']">
        Maps: Kediri, East java
      </p>
    </div>
  </div>
</div>
</footer>
</div>
  )
}

export default FooterAbout