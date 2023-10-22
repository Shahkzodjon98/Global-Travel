import Image from "next/image";
import Ellipse from "../assets/icons/Ellipse.svg";
import Ellipse1 from "../assets/icons/Ellipse (1).svg";
import Ellipse2 from "../assets/icons/Ellipse (2).svg";
import Ellipse3 from "../assets/icons/Ellipse (3).svg";
import Ellipse4 from "../assets/icons/Ellipse (4).svg";
import Ellipse5 from "../assets/icons/Ellipse (5).svg";

const ThreeTestimonial = () => {
  return (
    <>
      <div className="flex items-center justify-center mx-auto my-10 md:my-16 xl:my-20">
        <div className="  flex items-center flex-col  mx-auto">
          <p className="text-teal-900 text-base font-bold font-Poppins leading-7">
            Testimonial
          </p>
          <h1 className="text-zinc-700 text-2xl md:text-3xl xl:text-3xl font-bold font-Poppins leading-8">
            What they say about us
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8 md:my-12 xl:my-16">
            {[
              {
                icon: Ellipse,
                name: "Angelina Simple",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
              {
                icon: Ellipse1,
                name: "Viola Natalie",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
              {
                icon: Ellipse2,
                name: "Robert John K.",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
              {
                icon: Ellipse3,
                name: "Anggi Nani",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
              {
                icon: Ellipse4,
                name: "Graham Suryo J",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
              {
                icon: Ellipse5,
                name: "Bagas G Natfi",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 bg-transparent transform transition-transform hover:scale-110 cursor-pointer group hover:bg-[#43B97F] duration-300"
              >
                <div className="flex items-center gap-4">
                  <Image src={item.icon} width={50} height={50} alt="icon" />
                  <h1 className="text-zinc-700 text-xl font-bold font-Poppins leading-7 group-hover:text-white">
                    {item.name}
                  </h1>
                </div>
                <div className="my-6">
                  <p className="w-full md:w-[359px] xl:w-[359px] text-zinc-700 text-base font-normal font-Poppins leading-7 group-hover:text-white">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeTestimonial;
