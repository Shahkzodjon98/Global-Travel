"use client";

import axios from "axios";
import { useState } from "react";

const TwoContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/submitForm", {
        name,
        email,
        message,
      });

      if (response.data.success) {
        // Form submitted successfully
        console.log("Form submitted successfully!");
      } else {
        // Form submission failed
        console.error("Form submission failed.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <div>
    <div className="flex items-center justify-center my-24">
  <div className="container flex flex-col md:flex-row items-center justify-between mx-4 md:mx-auto">
    <div className="block items-center space-y-5 mx-4 md:mx-10 md:w-full">
      <h1 className="text-zinc-700 text-2xl md:text-3xl lg:text-4xl font-bold font-Poppins leading-10 md:leading-12 lg:leading-14">
        Get in touch
      </h1>
      <p className="text-zinc-700 text-base md:text-lg lg:text-xl font-normal font-Poppins leading-7 md:w-full">
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
                className="w-[280px] md:w-full h-10 rounded-md border border-zinc-400 outline-none px-2 py-2"
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
                className="w-full md:w-[580px] h-10 rounded-md border border-zinc-400 outline-none px-2 py-2"
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
                className="w-full md:w-[580px] h-40 sm:h-159 rounded-md border border-zinc-400 outline-none px-2 py-2"
              ></textarea>
          </div>
          <button
              type="submit"
              className="px-5 py-2 rounded-md  font-Poppins text-white text-base sm:text-base font-normal bg-[#43B97F] hover:bg-green-500 transition duration-300"
            >
              Send
            </button>
        </form>
      </div>
    </div>
    <div className="mx-4 md:mx-10 md:w-full md:my-0 my-10">
      <iframe
        width="100%"
        height="213"
        src="https://maps.google.com/maps?width=100%25&amp;height=213&amp;hl=en&amp;q=25%20yuri%20gagarin%20street,%20Tashkent+(hypernova)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
      >
        <a href="https://www.maps.ie/population/">Population mapping</a>
      </iframe>
    </div>
  </div>
</div>

    </div>
  );
};

export default TwoContactForm;
