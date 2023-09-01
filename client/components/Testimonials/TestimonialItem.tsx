import { FC } from "react";
import { AiFillStar } from "react-icons/ai";

interface IProps {
  rating: number;
  review: string;
  userImg: string;
  userName: string;
  userPosition: string;
}

const TestimonialItem: FC<IProps> = ({
  rating,
  review,
  userImg,
  userName,
  userPosition,
}) => {
  // generate rating
  let ratingContent = [];

  for (let i = 0; i < rating; i++) {
    ratingContent.push(<AiFillStar />);
  }

  return (
    <div className="py-9 px-7 border border-white/20 rounded-xl cursor-pointer">
      <div className="flex items-center text-[#C9F31D]">{ratingContent}</div>
      <p className="text-base leading-[29px] mt-4 font-medium">{review}</p>
      <div className="flex items-center gap-6 mt-8">
        <img
          src={userImg}
          className="w-[60px] h-[60px] rounded-full"
          alt="client"
        />
        <div>
          <h3 className="text-base font-medium mb-2">{userName}</h3>
          <span className="uppercase">{userPosition}</span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
