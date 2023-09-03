/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
  title: string;
  description: string;
}

const ExperienceItem: FC<IProps> = ({ title, description }) => {
  return (
    <div className="py-8 border-t border-white/20 flex items-center justify-between gap-4 lg:gap-24 w-full hover:bg-gray-500/20 px-2 transition-all last:border-b">
      <div>
        <h3 className="text-xl font-medium mb-3">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
      <div className="flex flex-col items-end gap-5">
        <FiArrowUpRight className="font-semibold text-white text-base cursor-pointer" />
        <span className="text-sm">2019 - 2023</span>
      </div>
    </div>
  );
};

export default ExperienceItem;
