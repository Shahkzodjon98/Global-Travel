import '../Style.css';

const ThreeSection = () => {
  return (
    <div>
<div className="w-full flex items-center justify-center mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center mx-10">
        <div className="Rect1 w-full  md:h-[300px] h-96 p-10 md:p-4 lg:p-10 space-y-4">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold font-Poppins leading-7">Water City Dreams</h1>
            <h3 className="text-white text-base font-bold font-Poppins leading-7 md:text-lg">September 18, 2022</h3>
            <p className="w-full text-white text-base font-normal font-Poppins leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            <button type="submit" className="text-white text-base font-bold font-Poppins leading-7 px-4 md:px-2 lg:px-2 py-2 md:py-2 lg:py-2 rounded-lg border border-green-400">Read More</button>
        </div>
        <div className="Rect2 w-full  md:h-[300px] h-96 p-10 md:p-4 lg:p-10 space-y-4">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold font-Poppins leading-7">Water City Dreams</h1>
            <h3 className="text-white text-base font-bold font-Poppins leading-7 md:text-lg">September 18, 2022</h3>
            <p className="w-full text-white text-base font-normal font-Poppins leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            <button type="submit" className="text-white text-base font-bold font-Poppins leading-7 px-4 md:px-2 lg:px-2 py-2 md:py-2 lg:py-2 rounded-lg border border-green-400">Read More</button>
        </div>
        <div className="Rect3 w-full  md:h-[300px] h-96 p-10 md:p-4 lg:p-10 space-y-4">
            <h1 className="text-white text-lg md:text-xl lg:text-2xl font-bold font-Poppins leading-7">Water City Dreams</h1>
            <h3 className="text-white text-base font-bold font-Poppins leading-7 md:text-lg">September 18, 2022</h3>
            <p className="w-full text-white text-base font-normal font-Poppins leading-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis</p>
            <button type="submit" className="text-white text-base font-bold font-Poppins leading-7 px-4 md:px-2 lg:px-2 py-2 md:py-2 lg:py-2 rounded-lg border border-green-400">Read More</button>
        </div>
            </div>
        </div>
    </div>
  )
}

export default ThreeSection