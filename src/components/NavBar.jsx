"use client";

import { useState } from "react";
// import { useTranslation } from "react-i18next";

import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

const NavBar = () => {
  const [currentLanguage, setCurrentLanguage] = useState("uz");
  const [menuOpen, setMenuOpen] = useState(false);

  const languageData = [
    {
      code: "uz",
      name: "UZ",
      flag: "uzbekFlag.png",
    },
    {
      code: "en",
      name: "EN",
      flag: "englishFlag.png",
    },
    {
      code: "ru",
      name: "RU",
      flag: "russianFlag.png",
    },
  ];

  const changeLanguage = (code) => {
    setCurrentLanguage(code);
  };
  // const { i18n} = useTranslation();
  // const changeLang = (lang) => {
  //   i18n.changeLanguage(lang);
  // };

  return (
    <nav className="img py-5 p-10">
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h1 className="text-white text-3xl sm:text-4xl font-normal font-['Poppins'] leading-10">
            Travelaja
          </h1>
        </Link>
      {/* Hamburger Menu Icon */}
      <div className="xl:hidden flex items-center justify-center cursor-pointer">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-2xl flex items-center justify-center"
          >
           <div className="flex items-center"> 
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}

           </div>
          </button>
        </div>

      {/* Mobile Menu */}
      <div
          className={`xl:flex xl:items-center  ${
            menuOpen ? "block" : "hidden"
          } mt-5 xl:mt-0 space-x-10 `}
        >
        <ul className="list-none sm:flex text-[#fff] text-base font-bold font-['Poppins'] leading-7">
          <Link href="/">Home</Link>
        </ul>
        <ul className="list-none sm:flex text-[#efecec] hover:text-[#43B97F] text-base font-normal font-['Poppins'] leading-7">
          <Link href="/discover">Discover</Link>
        </ul>
        <ul className="list-none sm:flex text-[#efecec] hover:text-[#43B97F] text-base font-normal font-['Poppins'] leading-7">
          <Link href="/service">Services</Link>
        </ul>
        <ul className="list-none sm:flex text-[#efecec] hover:text-[#43B97F] text-base font-normal font-['Poppins'] leading-7">
          <Link href="/news">News</Link>
        </ul>
        <ul className="list-none sm:flex text-[#efecec] hover:text-[#43B97F] text-base font-normal font-['Poppins'] leading-7">
          <Link href="/about">About Us</Link>
        </ul>
        <ul className="list-none sm:flex text-[#efecec] hover:text-[#43B97F] text-base font-normal font-['Poppins'] leading-7">
          <Link href="/contact">Contact</Link>
        </ul>
      </div>

      {/* Language Selector */}
      <div className="-space-y-1 group">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img
            src={
              languageData.find((lang) => lang.code === currentLanguage).flag
            }
            width={18}
            height={18}
            alt=""
            className="bg-none"
          />
          <p className="text-white text-base font-bold font-poppins leading-7">
            {currentLanguage}
          </p>
          <AiFillCaretDown className="text-[16px] text-white" />
        </div>

        <div className="absolute hidden group-hover:block mt-2 space-y-2">
          {languageData.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-button ${
                currentLanguage === lang.code ? "active" : ""
              } cursor-pointer block bg-[#295943] hover.bg-[#3D3E48] text-[#ffffff] font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
            >
              <img
                src={lang.flag}
                width={18}
                height={18}
                alt=""
                className="bg-none"
              />
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col space-y-5 py-[10%] md:py-20 xl:py-32">
      <h1 className="text-center text-white text-4xl sm:text-5xl font-normal font-['Poppins'] leading-[57.34px]">
        Explore the world with a smile
      </h1>
      <p className="w-full md:w-[696px] text-center text-white text-base font-normal font-['Poppins'] capitalize leading-7">
        Далеко-далеко за словесными горами в стране гласных и согласных живут
        рыбные тексты. Lorem путь рекламных своего алфавит речью
        переписывается языкового безопасную пояс на берегу текст знаках,
        предложения, коварных точках. Себя встретил лучше подзаголовок.
      </p>

      <div className="search-bar w-full md:w-[900px] bg-white rounded-lg shadow">
        <form className="flex flex-col items-center md:flex-row my-2 space-y-5 md:space-y-0 md:space-x-5">
          <div className="flex items-center md:mr-2">
            <FaLocationDot className="text-28" />
            <select className="block bg-white border border-gray-300 hover:border-gray-400 px-3 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
              <option>City or Destination</option>
              <option>Los Angeles</option>
              <option>Chicago</option>
              <option>Houston</option>
              <option>Miami</option>
            </select>
          </div>
          <div className="md:flex items-center md:border-0 border-b border-zinc-700">
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="City or Destination"
              className="block border-0 outline-none bg-transparent"
            />
          </div>
          <div className="md:w-[116px] md:h-[49px] md:border-l  border-zinc-700   md:p-5 md:mx-2 flex items-center">
            <label htmlFor=""></label>
            <input
              type="date"
              placeholder="Date of stay"
              className="block border-0 outline-none bg-transparent -mx-5"
            />
          </div>
          <div className="md:w-[116px] md:h-[49px] md:border-l  md:border-0 border-b border-zinc-700 md:p-4 flex items-center">
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Person"
              className="block border-0 outline-none bg-transparent mx-1"
            />
          </div>
          <div className="md:w-[168px] xl:h-[49px] md:p-0 p-2 bg-[#43B97F] rounded-[10px] flex items-center text-center justify-center space-x-1  ">
            <button className="text-white" type="submit">
              Find Trip Now
            </button>
            <BsSearch className="text-28 text-white rounded-50 border-0 outline-none cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
