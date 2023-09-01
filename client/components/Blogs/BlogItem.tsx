import { FC } from "react";

interface IProps {
  thumbnail: string;
  date: string;
  title: string;
  tags: string[];
}

const BlogItem: FC<IProps> = ({ thumbnail, date, title, tags }) => {
  return (
    <div className="p-6 border border-white/20 rounded-lg flex items-center justify-between gap-6">
      <div className="w-[50%]">
        <img src={thumbnail} className="rounded-lg" alt="blog" />
      </div>
      <div className="w-[50%]">
        <span className="text-xs uppercase">{date}</span>
        <h2 className="text-2xl font-medium my-4">{title}</h2>
        <div className="flex items-center gap-1">
          {tags?.map((tag) => (
            <button
              key={tag}
              className="px-4 py-2 rounded bg-white/20 text-white text-[13px] cursor-pointer transition-all hover:bg-[#BADB31] hover:text-black"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
