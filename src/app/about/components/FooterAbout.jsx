import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const FooterAbout = () => {
  return (
    <div>
       <footer className="w-full h-auto bg-[#295943] flex-col mx-auto">
<div className=" container  flex item-center justify-center mx-auto py-[41px]">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  mx-auto ">
    <div className="space-y-[35px]">
      <h2 className="text-white text-[33.18px] font-normal font-Poppins leading-10 ">
        Travelaja
      </h2>
      <p className=" md:w-full w-[281px] text-white text-base font-normal font-Poppins ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla
        urna, porttitor rhoncus dolor purus non enim praesent elementum
        facilisis leo, vel
      </p>
      <div className="flex flex-col gap-4 mx-auto ">
        <h1 className="text-white text-xl font-bold font-Poppins capitalize leading-[34.56px]">
          ShaxzodErkinov
        </h1>
        <div className="flex items-center flex-row gap-5 text-[#FFFFFF] text-[24px]">
          <Link href="https://www.instagram.com/">
          <BsInstagram />
          </Link>

          <Link href="https://m.facebook.com/">
          <BsFacebook />
          </Link>

          <Link href="https://twitter.com/">
          <BsTwitter />
          </Link>

          <Link href="https://github.com/">
          <BsGithub />
          </Link>
         
        </div>
      </div>
    </div>

    <div className=" space-y-[15px] md:mx-24 md:my-0 my-10">
      <h2 className="text-white text-xl font-bold font-Poppins  capitalize leading-[34.56px]">
        links
      </h2>
      <ul className="text-[#bdbbbb]  text-base font-normal font-Poppins space-y-[5px]">
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Discover</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Special Deals</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Services</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Community</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">About Us</Link>
        </li>
      </ul>
    </div>
    <div className=" space-y-[15px]">
      <h2 className="text-white text-xl font-bold font-Poppins capitalize leading-[34.56px]">
        Services
      </h2>
      <ul className="text-[#bdbbbb]  text-base font-normal font-Poppins space-y-[5px]">
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">About Us</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Blog & Articles</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Term and Condition</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Privacy Policy</Link>
        </li>
        <li className="hover:text-[#FFFFFF]">
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
    </div>
    <div className="space-y-[15px] text-start md:my-0 my-10  items-start">
      <h2 className="text-white text-xl font-bold font-Poppins capitalize leading-[34.56px]">
        Contact
      </h2>
      <p className="text-[#bdbbbb] hover:text-[#FFFFFF] text-base font-normal font-Poppins">
        Address: Jl.Codelaras No.205A
      </p>
      <p className="text-[#bdbbbb] hover:text-[#FFFFFF] text-base font-normal font-Poppins">
        Kediri, Pare AG17
      </p>
      <p className="text-[#bdbbbb] hover:text-[#FFFFFF] text-base font-normal font-Poppins">
        <Link href="tel:+998971415544">Phone: 97 141 55 44</Link>
      </p>
      <p className="text-[#bdbbbb] hover:text-[#FFFFFF] text-base font-normal font-Poppins">
        <Link href="mailto:shakhzoderkinov98@gmail.com">
          Email: shakhzoderkinov98@gmail.com
        </Link>
      </p>
      <p className="text-[#bdbbbb] hover:text-[#FFFFFF] text-base font-normal font-Poppins">
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