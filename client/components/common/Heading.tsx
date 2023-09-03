import { FC } from "react";

interface IProps {
  title: string;
  subTitle: string;
  description?: string;
  center?: boolean;
}

const Heading: FC<IProps> = ({ title, subTitle, description, center }) => {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="inline-block py-2 px-6 rounded-full border border-white/20 text-sm font-medium text-white uppercase">
        {subTitle}
      </p>
      <h2 className="text-[35px] lg:text-[40px] xl:text-[45px] mt-2 mb-5">
        {title}
      </h2>
      {description && <span>{description}</span>}
    </div>
  );
};

export default Heading;
