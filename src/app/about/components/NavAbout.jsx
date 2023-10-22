"use client";

import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";

const NavAbout = () => {
  const [selected, setSelected] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("UZ");
  const [menuOpen, setMenuOpen] = useState(false);

  const languageData = [
    {
      code: "UZ",
      name: "UZ",
      flag: "uzbekFlag.png",
    },
    {
      code: "EN",
      name: "EN",
      flag: "englishFlag.png",
    },
    {
      code: "RU",
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
    <nav className=" py-3.5 px-5 mx-auto ">
      <div className="container flex justify-between items-center mx-auto">
        <Link href="/">
          <h1 className="text-[#3D3E48] text-3xl sm:text-4xl font-normal font-'Poppins' leading-10">
            Travelaja
          </h1>
        </Link>
  

      {/* Mobile Menu */}
      <div
          className={`xl:flex xl:items-center  ${
            menuOpen ? "block" : "hidden"
          } mt-5 xl:mt-0 space-x-10 `}
        >
        <ul className="list-none sm:flex text-[#3D3E48] text-base  font-'Poppins' leading-7">
          <Link href="/">Home</Link>
        </ul>
        <ul className="list-none sm:flex text-[#3D3E48] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
    
          <Link href="/discover">Discover</Link>
        </ul>
        <ul className="list-none sm:flex text-[#3D3E48] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
          <Link href="/service">Services</Link>
        </ul>
        <ul className="list-none sm:flex text-[#3D3E48] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
          <Link href="/news">News</Link>
        </ul>
        <ul className="list-none sm:flex text-[#3D3E48] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
        <li
                style={{
                  color: selected ? "#43B97F" : "#43B97F",
                }}
              >
          <Link href="/about">About Us</Link>
          </li>
        </ul>
        <ul className="list-none sm:flex text-[#3D3E48] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
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
          <p className="text-[#3D3E48] text-base font-bold font-'Poppins' leading-7">
            {currentLanguage}
          </p>
          <AiFillCaretDown className="text-[16px] text-[#3D3E48]" />
        </div>

        <div className="absolute hidden group-hover:block mt-2 space-y-2">
          {languageData.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`language-button ${
                currentLanguage === lang.code ? "active" : ""
              } cursor-pointer block bg-[#295943] hover.bg-[#3D3E48] text-[#ffffff] font-bold font-'Poppins' py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
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

      <div className="xl:hidden flex items-center justify-center cursor-pointer ">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#3D3E48] text-2xl flex items-center justify-center "
          >
           <div className="flex items-center"> 
            {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}

           </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavAbout;
