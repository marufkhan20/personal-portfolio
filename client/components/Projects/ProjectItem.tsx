import { FC } from "react";

interface IProps {
  thumbnail: string;
  category: string;
  title: string;
}

const ProjectItem: FC<IProps> = ({ thumbnail, category, title }) => {
  return (
    <div className="text-center cursor-pointer transition-all hover:bg-[#3F3F3F] rounded-xl p-4">
      <img src={thumbnail} className="w-full rounded-lg" alt="project" />
      <span className="uppercase mt-6 block">{category}</span>
      <h3 className="text-xl font-medium mt-2">{title}</h3>
    </div>
  );
};

export default ProjectItem;
