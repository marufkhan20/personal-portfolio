/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";

const Banner = () => {
  return (
    <section className="min-h-screen">
      <div className="container">
        <div className="min-h-screen flex justify-between gap-10 items-center">
          <div>
            <div className="mb-20">
              <h3 className="text-xl font-medium mb-5">Expertise</h3>
              <span className="text-white">FRONT-END & WEB DEVELOPER</span>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center text-lg">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                </div>
                <span className="font-semibold">4.9</span>
              </div>
              <span className="text-base">7000+ Clients Reviews</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-white font-medium text-2xl">
              HELLO, {"I'M"}
            </span>
            <h2 className="my-2 text-[70px]">Rashedul Islam</h2>
            <span className="text-base">
              UI / UX Designer Based in Melbourne
            </span>
            <div className="w-[250px] h-[250px] border border-dashed rounded-full block mx-auto mt-16 p-3 border-white/20">
              <img
                src="/img/user.png"
                alt="user"
                className="w-full h-full rounded-full mx-auto"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-end gap-3">
              <div className="text-right">
                <span className="text-white">YEARS</span>
                <br />
                <span className="text-white">OF EXPERIENCE</span>
              </div>
              <h3 className="text-[45px] leading-[45px]">12</h3>
            </div>

            <div className="mt-24 text-right">
              <span>FEATURED WORK</span>
              <h3 className="my-4 font-medium text-lg">
                Bayone Framer UI / UX Template
              </h3>
              <Link href="#" className="underline">
                EXPLORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
