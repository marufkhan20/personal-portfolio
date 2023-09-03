import { BsArrowUpRight } from "react-icons/bs";
import Heading from "../common/Heading";
import BlogItem from "./BlogItem";

const Blogs = () => {
  return (
    <section className="py-28 bg-secondary" id="blogs">
      <div className="container">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-5">
          <Heading title="Latest News." subTitle="OUR BLOG" />
          <button className="flex items-center gap-2 text-white hover:underline font-medium">
            View All My Blog <BsArrowUpRight />
          </button>
        </div>

        <div className="mt-[90px] grid lg:grid-cols-2 gap-6">
          <BlogItem
            thumbnail="/img/blogs/1.jpg"
            date="august 6, 2023"
            title="Free advertising for your online business."
            tags={["Marketing", "Design"]}
          />
          <BlogItem
            thumbnail="/img/blogs/2.jpg"
            date="august 6, 2023"
            title="Free advertising for your online business."
            tags={["Marketing", "Design"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
