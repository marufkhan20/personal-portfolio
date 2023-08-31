import { FaStarOfLife } from "react-icons/fa";

const PopularServices = () => {
  return (
    <section className="bg-secondary py-10 px-20 rounded-2xl mx-10 shadow mb-10 flex items-center gap-10 justify-between">
      <h2 className="text-[30px]">Web Development</h2>
      <FaStarOfLife className="text-[30px]" />
      <h2 className="text-[30px]">Web Design</h2>
      <FaStarOfLife className="text-[30px]" />
      <h2 className="text-[30px]">Mobile Application</h2>
      <FaStarOfLife className="text-[30px]" />
      <h2 className="text-[30px]">WordPress Development</h2>
    </section>
  );
};

export default PopularServices;
