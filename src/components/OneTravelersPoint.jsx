import Image from "next/image";
import travelerspoint from "../assets/travelerspoint.svg";
import "../app/globals.css";

const OneTravelersPoint = () => {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <div className=" container p-10 my-10 mx-10 flex flex-col md:flex-row justify-start items-start gap-10">
          {/* Image */}
          <Image
            src={travelerspoint}
            alt="Travelers Point"
            width={580}
            height={311}
          />

          <div className="flex flex-col items-start p-4">
            <p className="text-teal-900 text-base font-bold font-poppins leading-7">
              Travelers Point
            </p>

            <div className="my-4">
              <h1 className="text-zinc-700 text-2xl md:text-3xl font-bold font-poppins leading-9">
                We help you find your dream place
              </h1>
            </div>

            <p className="w-full md:w-[575px] text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              aliquam, purus sit amet luctus venenatis, lectus magna fringilla
              urna, porttitor rhoncus dolor purus. Non enim praesent elementum
              facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-2 gap-24 ">
              <div className=" flex flex-col py-6">
                <span className="text-[#295943] text-[27.65px] font-bold font-['Poppins'] leading-[33.18px]">
                  100+
                </span>
                <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Holiday Package
                </p>
                <div className=" my-10">
                  <span className="text-[#295943] text-[27.65px] font-bold font-['Poppins'] leading-[33.18px]">
                    68
                  </span>
                  <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                    Elite Transportation
                  </p>
                </div>
              </div>

              <div className=" flex flex-col py-6 ">
                <span className="text-[#295943] text-[27.65px] font-bold font-['Poppins'] leading-[33.18px]">
                  172
                </span>
                <p className="text-zinc-700 text-base font-normal font-['Poppins'] leading-7">
                  Hotels
                </p>
                <div className=" my-10">
                  <span className="text-[#295943] text-[27.65px] font-bold font-['Poppins'] leading-[33.18px]">
                    32M+
                  </span>
                  <p className="text-zinc-700 text-base font-normal font-['Poppins']   leading-7">
                    We help to find your dream place
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneTravelersPoint;
