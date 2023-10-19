import Image from "next/image";
import rect1 from "../assets/Rectangle 30.svg";
import rect2 from "../assets/Rectangle 30 (2).svg";
import rect3 from "../assets/Rectangle 30 (3).svg";
import rect4 from "../assets/Rectangle 30 (4).svg";

const FourOurTeams = () => {
  return (
    <>
   <div className="flex items-center justify-center mx-auto my-8 sm:my-10 md:my-16">
  <div className="flex items-start flex-col space-y-4 sm:space-y-2 md:space-y-2">
    <h1 className="text-zinc-700 text-2xl sm:text-3xl md:text-[27.65px] font-bold font-['Poppins'] leading-[33.18px] sm:leading-[34px] md:leading-[33.18px]">Our Teams</h1>
    <p className="text-zinc-700 text-base sm:text-lg font-normal font-['Poppins'] leading-7 sm:leading-6">Lorem ipsum dolor sit amet</p>
    <div className="flex items-stretch flex-col gap-8 sm:gap-20 md:flex-row">
      <div className="flex flex-col my-8 sm:my-20">
        <Image src={rect1} alt="" />
        <div className="my-3 sm:my-5">
          <h5 className="text-black text-xl sm:text-2xl font-normal font-['Poppins'] leading-[34.56px] sm:leading-[36px]">
            Agung perdana
          </h5>
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7 sm:leading-6">Web Designer</p>
        </div>
      </div>
      <div className="flex flex-col my-8 sm:my-20">
        <Image src={rect2} alt="" />
        <div className="my-3 sm:my-5">
          <h5 className="text-black text-xl sm:text-2xl font-normal font-['Poppins'] leading-[34.56px] sm:leading-[36px]">
            Viola Resti
          </h5>
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7 sm:leading-6">
            Marketing Director
          </p>
        </div>
      </div>
      <div className="flex flex-col my-8 sm:my-20">
        <Image src={rect3} alt="" />
        <div className="my-3 sm:my-5">
          <h5 className="text-black text-xl sm:text-2xl font-normal font-['Poppins'] leading-[34.56px] sm:leading-[36px]">
            Rahardianysah
          </h5>
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7 sm:leading-6">
            International Relations
          </p>
        </div>
      </div>
      <div className="flex flex-col my-8 sm:my-20">
        <Image src={rect4} alt="" />
        <div className="my-3 sm:my-5">
          <h5 className="text-black text-xl sm:text-2xl font-normal font-['Poppins'] leading-[34.56px] sm:leading-[36px]">
            Andika
          </h5>
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7 sm:leading-6">
            Medical Check
          </p>
        </div>
      </div>
      <div className="flex flex-col my-8 sm:my-20">
        <Image src={rect1} alt="" />
        <div className="my-3 sm:my-5">
          <h5 className="text-black text-xl sm:text-2xl font-normal font-['Poppins'] leading-[34.56px] sm:leading-[36px]">
            Theresa Russell
          </h5>
          <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7 sm:leading-6">
            Doctor Assistant
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default FourOurTeams