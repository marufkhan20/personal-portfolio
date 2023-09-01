import { FC } from "react";

interface IProps {
  tool: string;
  name: string;
}

const Tool: FC<IProps> = ({ tool, name }) => {
  return (
    <div className="py-12 px-7 border border-white/20 text-center rounded-[60px] transition-all hover:border-white cursor-pointer grayscale hover:grayscale-0 duration-300">
      <img className="w-full" src={tool} alt="tool" />
      <span className="mt-2 text-white block">{name}</span>
    </div>
  );
};

export default Tool;
