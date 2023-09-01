import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Heading from "../common/Heading";
import TestimonialItem from "./TestimonialItem";

const Testimonials = () => {
  return (
    <section className="py-28">
      <div className="container">
        <div className="flex justify-between gap-5 items-center">
          <div className="w-[33%]">
            <Heading title="Testimonials" subTitle="WHAT CLIENTS SAYS" />
            <div className="flex items-center gap-5">
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all hover:bg-gray-500/20">
                <AiOutlineArrowLeft />
              </div>
              <div className="w-[50px] h-[50px] rounded-full border border-white/20 flex items-center justify-center cursor-pointer transition-all hover:bg-gray-500/20">
                <AiOutlineArrowRight />
              </div>
            </div>
          </div>
          <div className="w-[66%] grid grid-cols-2 gap-8">
            <TestimonialItem
              rating={5}
              review=" I have been hiring people in this space for a number of years and I have
        never seen this level of professionalism. It really feels like you are
        working with a team that can get the job done."
              userImg="/img/clients/1.jpg"
              userName="Leonard Heiser"
              userPosition="CEO"
            />
            <TestimonialItem
              rating={4}
              review=" I have been hiring people in this space for a number of years and I have
        never seen this level of professionalism. It really feels like you are
        working with a team that can get the job done."
              userImg="/img/clients/2.jpg"
              userName="John Doe"
              userPosition="CEO"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
