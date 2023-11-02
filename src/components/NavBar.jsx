"use client";

import { useState } from "react";


import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineMenu, AiOutlineClose, AiFillCaretDown } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


import { useTranslation } from 'react-i18next';


const NavBar = () => {
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


    const { i18n, t } = useTranslation();
    const changeLang = (lang) => {
      i18n.changeLanguage(lang);
    };



  const [selectedDate, setSelectedDate] = useState(null);

  const [cityOrDestination, setCityOrDestination] = useState('');
  const [dateOfStay, setDateOfStay] = useState('');
  const [person, setPerson] = useState('');

  const handleCityOrDestinationChange = (e) => {
    setCityOrDestination(e.target.value);
  };


  const handlePersonChange = (e) => {
    setPerson(e.target.value);
  };

  const handleFindTrip = () => {
    // Handle the Find Trip button click here
    console.log('City or Destination:', cityOrDestination);
    console.log('Date of Stay:', dateOfStay);
    console.log('Person:', person);
    // You can add your logic to process the form data or make an API request here
  };

  return (
    <nav className="img1 py-[24.5px] px-5 mx-auto ">
      <div className="container flex justify-between items-center mx-auto ">
        <Link href="/">
          <h1 className="text-white text-3xl sm:text-4xl font-normal font-'Poppins' leading-10">
            Travelaja
          </h1>
        </Link>
  


{/* Mobile Menu */}
<div
  className={`xl:flex xl:items-center ${
    menuOpen ? "block absolute bg-white w-full left-0 top-[100px] " : "hidden"
  } xl:mt-0 xl:space-x-10 md:hidden flex flex-col xl:flex-row items-center justify-center`}
>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] text-base font-bold font-'Poppins' leading-7">
    <Link href="#">{t('home')}</Link>
  </ul>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
    <Link href="/discover">Discover</Link>
  </ul>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
    <Link href="/service">Services</Link>
  </ul>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
    <Link href="/news">News</Link>
  </ul>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
    <Link href="/about">About Us</Link>
  </ul>
  <ul className="py-3 xl:py-0 text-black mx-4 list-none sm:flex md:text-[#efecec] hover:text-[#43B97F] text-base font-normal font-'Poppins' leading-7">
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
    <p className="text-white text-base font-bold font-'Poppins' leading-7">
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
        } cursor-pointer block bg-[#295943] hover:bg-[#3D3E48] text-[#ffffff] font-bold font-'Poppins' py-2 px-4 rounded-lg transition duration-300 ease-in-out`}
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

{/* Hamburger Menu Icon */}
<div className="xl:hidden md:flex items-center justify-center cursor-pointer text-center ">
  <button
    onClick={() => setMenuOpen(!menuOpen)}
    className="text-white text-2xl flex items-center justify-center "
  >
    <div className="flex items-center">
      {menuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </div>
  </button>
</div>
</div>
  
    <div className="flex justify-center items-center flex-col space-y-5 py-[10%]">
  <div className="my-10 space-y-4">
  <h1 className="text-center text-white text-4xl sm:text-5xl font-normal font-'Poppins' leading-[57.34px]">
        Explore the world with a smile
      </h1>
      <p className="w-full md:w-[686px] text-center text-white text-base font-normal font-'Poppins' capitalize leading-7">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo,
      </p>
  </div>

  <div className=" w-full md:w-[830px] bg-white rounded-lg shadow">
        <form
          className="flex flex-col items-center justify-center md:flex-row my-[9px] md:p-0 py-3 space-y-5 md:space-y-0 md:space-x-5"
          onSubmit={(e) => {
            e.preventDefault();
            handleFindTrip();
          }}
        >
          <div className="flex items-center md:mr-2 gap-[24px] md:border-0 border-b border-zinc-700 font-'Poppins'">
            <FaLocationDot className="text-28" />
            <input
              type="text"
              placeholder="City or Destination"
              value={cityOrDestination}
              onChange={handleCityOrDestinationChange}
              className="block border-0 outline-none bg-transparent md:text-start text-center"
            />
          </div>

      <div className="relative max-w-sm">
      <div className="absolute inset-y-0 -left-5  font-'Poppins' flex items-center pointer-events-none md:border-l md:border-0 border-b border-zinc-700">
      </div>
      <DatePicker
      selected={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      className=" outline-none text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block font-'Poppins'   p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholderText="Date of stay"
      />
      </div>


          <div className="md:w-[116px] md:h-[49px] md:border-l font-'Poppins' border-zinc-700 md:p-5 md:border-0 border-b  flex items-center">
            <label htmlFor=""></label>
            <input
              type="text"
              placeholder="Person"
              value={person}
              onChange={handlePersonChange}
              className="block border-0 outline-none bg-transparent md:text-start text-center "
            />
          </div>
          <div className="md:w-[168px] xl:h-[49px] md:p-2 p-2 bg-[#43B97F] relative md:left-5  left-0 rounded-[10px] flex items-center text-center justify-center space-x-2 ">
            <button className="text-white font-normal font-'Poppins' " type="submit">
              Find Trip Now
            </button>
            <BsSearch className="text-[24px] text-white rounded-50 border-0 outline-none cursor-pointer" />
          </div>
        </form>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
