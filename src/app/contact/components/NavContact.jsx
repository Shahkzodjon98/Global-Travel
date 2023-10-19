"use client";

import { useState } from "react";
// import { useTranslation } from "react-i18next";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import Link from "next/link";

const NavContact = () => {
  const [selected] = useState(false);
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
    <nav className=" py-5 p-10 flex items-center justify-center">
      <div className="container flex justify-between items-center">
        <Link
          href="/"
          onClick={() => {
            setMenuOpen(false); // Close the menu when clicking the logo
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="text-[#295943] text-[33.18px] font-normal font-['Poppins'] leading-10">
            Travelaja
          </h1>
        </Link>

        <div>
          {/* Mobile Menu */}
          <div className="xl:hidden flex items-center cursor-pointer">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#3D3E48] text-2xl"
            >
              {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          <div
            className={`xl:flex xl:items-center ${
              menuOpen ? "block" : "hidden"
            } mt-4 xl:mt-0 space-x-10`}
          >
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
              <Link href="/">Home</Link>
            </ul>
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
              <Link href="/discover">Discover</Link>
            </ul>
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
              <Link href="/service">Services</Link>
            </ul>
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
            
                <Link href="/news">News</Link>
            </ul>
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
         
              <Link href="/about">About Us</Link>
             

            </ul>
            <ul className="list-none sm:flex text-zinc-700 hover:text-[#43B97F] text-base font-normal font-Poppins leading-7">
            <li
                style={{
                  color: selected ? "#43B97F" : "#43B97F",
                }}
              >
              <Link href="contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

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
            <p className="text-[#3D3E48] text-base font-bold font-poppins leading-7">
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
                } cursor-pointer block bg-[#295943] hover:bg-[#3D3E48] text-[#ffffff] font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
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
    </nav>
  );
};

export default NavContact;
