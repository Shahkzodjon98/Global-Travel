import Image from "next/image";
import Rect25 from "../assets/Rectangle 25.svg";

const ThreeAboutTravelaja = () => {
  return (
    <>
 <div className="flex items-center justify-center my-24">
  <div className="container flex flex-col items-center md:flex-row mx-auto space-y-5 md:space-y-0 md:space-x-5">
    <div className="flex md:items-start items-center flex-col">
      <h1 className="text-zinc-700 text-2xl md:text-[27.65px] font-bold font-'Poppins' leading-[33.18px] md:leading-[33.18px]">
        About Travelaja.com
      </h1>
      <d  iv className="my-5 md:my-10 md:items-start items-center space-y-3 md:p-0 p-2">
        <p className="text-zinc-700 flex text-justify text-base md:text-base font-normal font-'Poppins' leading-6 md:leading-7">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dictum et in feugiat. Platea in diam, est congue. Posuere sapien morbi augue ultrices. Et facilisi orci sollicitudin placerat lacus lacus nibh. Egestas semper massa viverra massa proin in morbi placerat. Pharetra nec, est non integer nisi, ut faucibus. Non, in nam sollicitudin vitae volutpat ac molestie. Turpis pellentesque sit pellentesque id cras lobortis tortor, blandit.
        </p>
        <p className="text-zinc-700 flex text-justify text-base md:text-base font-normal font-'Poppins' leading-6 md:leading-7">
          Id ac non, semper turpis maecenas. Convallis tempor fringilla quisque arcu, dictum. Vitae cursus vel netus tincidunt vitae. Malesuada velit, at mattis adipiscing quisque tristique id magna. Blandit porta sit nam magna sit. Turpis vestibulum facilisis placerat habitant gravida eget. Lacus pretium, arcu non adipiscing sed faucibus semper eget tempor.
        </p>
      </d>
    </div>
    <Image src={Rect25} alt="" />
  </div>
</div>

    </>
  )
}

export default ThreeAboutTravelaja