import Heading from "../common/Heading";
import ExperienceItem from "./ExperienceItem";
import Tool from "./Tool";

const MyExperience = () => {
  return (
    <section className="py-28 bg-secondary">
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="w-[45%]">
            <Heading title="My Experience" subTitle="SKILLS & EXPERIENCE" />
            <div className="grid grid-cols-4 gap-3 mt-[70px]">
              <Tool />
              <Tool />
              <Tool />
              <Tool />
            </div>
          </div>
          <div className="w-[45%]">
            <ExperienceItem
              title="Android Studio"
              description="Junior Product Designer"
            />
            <ExperienceItem
              title="Slack"
              description="UI/UX Designer & Developer"
            />
            <ExperienceItem title="Apple" description="ios Developer" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyExperience;
