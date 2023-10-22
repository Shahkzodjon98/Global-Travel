import Image from "next/image";
import Rectangle17 from "../assets/Rectangle 17.svg";
import Rectangle18 from "../assets/Rectangle 18.svg";
import Rectangle19 from "../assets/Rectangle 19.svg";

const TwoDiscover = () => {
  return (
    <>
    <div className=" flex items-center flex-col my-10 mx-10">
      <div className=" flex-col first-line:uppercase first-line:tracking-widest
        first-letter:text-7xl first-letter:font-bold first-letter:text-slate-900
        first-letter:mr-3 first-letter:float-left mx-auto">
        <p className="  text-black text-base font-normal font-'Poppins' leading-7">D Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi.</p>
        <p className=" text-black text-base font-normal font-'Poppins' leading-7">enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci sagittis eu volutpat odio facilisis mauris sit amet massa vitae tortor condimentum lacinia quis vel eros donec ac odio tempor orci dapibus ultrices in iaculis nunc sed augue lacus, viverra vitae congue eu, consequat ac felis donec et odio pellentesque diam volutpat commodo sed egestas egestas fringilla fau.</p>
      </div>
      <div className="flex flex-col my-6 w-full">
        <div className=" w-full">
        <Image src={Rectangle17} alt=""/>
        </div>
        <div className=" my-6">
          <h1 className=" text-zinc-700 text-[27.65px] font-normal font-'Poppins' capitalize leading-[33.18px]">Memorable festivals on bali beach</h1>
          <p className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32"><path fill="#295943" d="M16 2A11.013 11.013 0 0 0 5 13a10.889 10.889 0 0 0 2.216 6.6s.3.395.349.452L16 30l8.439-9.953c.044-.053.345-.447.345-.447l.001-.003A10.885 10.885 0 0 0 27 13A11.013 11.013 0 0 0 16 2Zm0 15a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4Z"/><circle cx="16" cy="13" r="4" fill="none"/></svg> Bali, Indonesia</p>
          <div className="my-10">
            <p className=" text-black text-base font-normal font-'Poppins' leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.</p>
            <p className=" text-black text-base font-normal font-'Poppins' leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie.</p>
          </div>
          <div className="flex items-center md:flex-row flex-col gap-10">
           <Image src={Rectangle18} alt=""/>
            <Image src={Rectangle19} alt=""/>
          </div>
          <div className="my-6">
            <p className=" text-black text-base font-normal font-'Poppins' leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer facilisis aliquet erat vitae viverra ornare. Placerat urna integer nibh justo. Dictum vulputate odio mauris amet, dictumst molestie. Faucibus consectetur mauris tristique dolor ut diam, adipiscing et. Semper mi proin malesuada orci phasellus. Consectetur posuere iaculis amet sem. Euismod turpis pellentesque sit risus eu, sagittis nulla. Facilisis urna, mi pharetra sed.</p>
          </div>
        </div>
      </div>
    </div>

    </>
  );
};

export default TwoDiscover;