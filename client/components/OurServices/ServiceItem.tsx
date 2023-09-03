/* eslint-disable @next/next/no-img-element */

import { FC } from "react";

interface IProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceItem: FC<IProps> = ({ icon, title, description }) => {
  return (
    <div className="py-11 border-t border-white/20 flex flex-col lg:flex-row lg:items-center justify-between gap-4 lg:gap-24 w-full hover:bg-[#3F3F3F]/20 px-2 transition-all">
      <img className="w-12 h-12" src={icon} alt="service" />
      <h3 className="text-xl font-medium">{title}</h3>
      <p className="text-base">{description}</p>
    </div>
  );
};

export default ServiceItem;
