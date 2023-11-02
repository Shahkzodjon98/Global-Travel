"use client";


import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const TwoContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/submitForm", {
        name,
        email,
        message,
      });
  
      if (response.data.success) {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Successfully!',
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          position: 'top-center',
          icon: 'error',
          title: 'Form submission failed',
          text: `Server response: ${response.data}`,
        });
      }
    } catch (error) {
      Swal.fire({
        position: 'top-center',
        icon: 'error',
        title: 'Error',
        text: error.message,
      });
    }
  };
  

  return (
    <div>
 <div className="flex items-center justify-center my-24 md:p-0 p-5">
  <div className="container flex flex-col md:flex-row items-center justify-between mx-4 md:mx-auto ">
    <div className="block items-center space-y-5 mx-4 md:mx-10 md:w-full">
      <h1 className="text-[#3D3E48] text-2xl md:text-3xl lg:text-4xl font-bold font-Poppins leading-10 md:leading-12 lg:leading-14">
        Get in touch
      </h1>
      <p className="text-zinc-700 text-base md:text-lg lg:text-xl text-justify font-normal font-Poppins leading-7 md:w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
        aliquam, purus sit amet luctus venenatis, lectus magna fringilla
        urna, porttitor rhoncus dolor purus non enim praesent elementum
        facilisis leo, vel fringilla est ullamcorper eget nulla facilisi
        etiam dignissim diam quis enim lobortis scelerisque fermentum dui
        faucibus in ornare quam viverra
      </p>

      <div className="mx-auto flex flex-col md:flex-row items-start ">
        <form onSubmit={handleSubmit} className="space-y-4 ">
          <div>
            <label htmlFor="name" className="block">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-[360px] md:w-[580px] h-57 md:h-[57px] rounded-md border border-[#A8A7AB] outline-none px-4 py-4"
              placeholder="Input your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-[360px] md:w-[580px] h-57 md:h-[57px] rounded-md border border-[#A8A7AB] outline-none px-4 py-4"
              placeholder="Email"
            />
          </div>
          <div>
            <label htmlFor="message" className="block">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full md:w-[580px] h-[159px] md:h-[159px] rounded-md border border-[#A8A7AB] outline-none px-2 py-2"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-[5px] rounded-md font-Poppins text-[#ffffff] text-base sm:text-base font-normal bg-[#43B97F] hover:bg-green-500 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
    <div className="mx-4 md:w-full md:my-0 my-10">
      <iframe
        width="100%"
        height="339"
        src="https://maps.google.com/maps?width=100%25&amp;height=213&amp;hl=en&amp;q=25%20yuri%20gagarin%20street,%20Tashkent+(hypernova)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        This is your embedded map content.
      </iframe>
      <p>
        <a href="https://www.maps.ie/population/"></a>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10 sm:my-5">
  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">Address :</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">JL.Cindelaras No.205A</p>
  </div>

  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">Phone :</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">+(97) 141-55-44</p>
  </div>

  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">City:</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">Yogyakarta, Indonesia</p>
  </div>

  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">Email:</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">info@travelaja.com</p>
  </div>

  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">Open:</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">At 8AM</p>
  </div>

  <div className="flex items-center space-x-5 py-2">
    <h2 className="text-black text-base font-normal font-Poppins leading-7">Close:</h2>
    <p className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">At 8PM</p>
  </div>
</div>

<div className="flex items-start flex-col my-5 sm:my-10 space-y-2">
  <h2 className="text-[#3D3E48] text-base font-normal font-Poppins leading-7">AVAILABLE AT 9AM - 10PM</h2>
  <h1 className="text-[#3D3E48] text-4xl sm:text-5xl font-normal font-Poppins leading-[82.56px]">+(97) 141-55-44</h1>
</div>

    </div>
    </div>
    </div>
    </div>
  );
};

export default TwoContactForm;
