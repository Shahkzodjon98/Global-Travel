import Image from "next/image";
import Link from "next/link";
import Rect1 from "../assets/Rectangle 24 (1).svg";
import Rect2 from "../assets/Rectangle 24 (2).svg";
import Rect3 from "../assets/Rectangle 24 (3).svg";

const TwoTravelajaArticles = () => {
  return (
    <div>
      <div className=" flex items-center justify-center mx-auto my-10">
        <div className="container mx-auto my-5 sm:my-10">
          <div className="flex flex-col items-center space-y-5 text-center">
            <p className="text-zinc-700 text-2xl font-normal font-'Poppins' leading-2xl sm:text-3xl sm:leading-3xl">
              Travelaja Articles
            </p>
            <span className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam
            </span>
          </div>
          <div className="overflow-x-auto">
          <div className="flex flex-row items-center my-5 sm:flex-row sm:justify-center sm:my-10 gap-10">
  <Link href="/">
    <p className="text-[#ffffff] text-center sm:text-left text-base font-bold font-Poppins leading-7 px-5 py-2.5 bg-[#43B97F] rounded-5">
      Adventure Travel
    </p>
  </Link>
  <Link href="/">
    <p className="text-[#43B97F] text-center sm:text-left text-base font-bold font-Poppins leading-7">
      Beach
    </p>
  </Link>
  <Link href="/">
    <p className="text-zinc-700 text-center sm:text-left text-base font-bold font-Poppins leading-7">
      Explore World
    </p>
  </Link>
  <Link href="/">
    <p className="text-zinc-700 text-center sm:text-left text-base font-bold font-Poppins leading-7">
      Family Holidays
    </p>
  </Link>
  <Link href="/">
    <p className="text-zinc-700 text-center sm:text-left text-base font-bold font-Poppins leading-7">
      Art and culture
    </p>
  </Link>
</div>

</div>


          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 mx-auto my-10">
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect1} alt="img" />
              <div className="mx-2 sm:mx-5 md:mx-auto flex flex-col">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  where can i go? 5 amazing countries that are open right now
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect2} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  beautiful view of indonesias natural hills
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect3} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>

            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect1} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect2} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect3} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>

            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect1} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect2} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
            <div className="flex items-center flex-col space-y-5 ">
              <Image src={Rect3} alt="img" />
              <div className="mx-10 flex flex-col ">
                <span className="text-black text-xl font-normal font-'Poppins' leading-[34.56px]">
                  10 Indonesian Destinations you should visit in this year
                </span>
                <small className="text-zinc-700 text-base font-normal font-'Poppins' leading-7">
                  September 19, 2022
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoTravelajaArticles;
