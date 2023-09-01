import Heading from "../common/Heading";
import ServiceItem from "./ServiceItem";

const OurServices = () => {
  return (
    <section className="py-28 bg-secondary">
      <div className="container">
        <div className="flex justify-between gap-5">
          <div className="w-[30%]">
            <Heading
              title="Our Services"
              subTitle="FEATURED SERVICES"
              description="Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed quia."
            />
          </div>
          <div className="w-[60%]">
            <ServiceItem
              icon="/img/services/0.png"
              title="Digital Product Design"
              description="Creating a higher spacing and how people move through a unique."
            />
            <ServiceItem
              icon="/img/services/1.png"
              title="Branding & Design"
              description="Creating a higher spacing and how people move through a unique."
            />
            <ServiceItem
              icon="/img/services/2.png"
              title="Web Development"
              description="Creating a higher spacing and how people move through a unique."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
