import Heading from "../common/Heading";
import ExperienceItem from "./ExperienceItem";
import Tool from "./Tool";

const MyExperience = () => {
  return (
    <section className="py-28 bg-secondary">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="w-full lg:w-[45%]">
            <Heading title="My Experience" subTitle="SKILLS & EXPERIENCE" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-[70px]">
              <Tool tool="/img/tools/1.webp" name="Node JS" />
              <Tool tool="/img/tools/2.png" name="Express JS" />
              <Tool tool="/img/tools/3.webp" name="React JS" />
              <Tool tool="/img/tools/4.webp" name="MongoDB" />
            </div>
          </div>
          <div className="w-full lg:w-[45%]">
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
