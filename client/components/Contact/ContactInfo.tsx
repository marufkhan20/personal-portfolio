import Heading from "../common/Heading";

const ContactInfo = () => {
  return (
    <div>
      <Heading
        title="Let's make your brand brilliant!"
        subTitle="GET IN TOUCH"
      />
      <p className="text-[15px]">
        If you would like to work with us or just want to get in touch, we’d
        love to hear from you!
      </p>
      <h2 className="text-xl sm:text-3xl mt-6 underline">+1 840 841 25 69</h2>
      <div className="mt-14 flex items-center gap-6">
        <a
          href="#"
          className="text-white font-medium transition-all hover:-mt-4 block"
        >
          Facebook
        </a>
        <a
          href="#"
          className="text-white font-medium transition-all hover:-mt-4 block"
        >
          Instagram
        </a>
        <a
          href="#"
          className="text-white font-medium transition-all hover:-mt-4 block"
        >
          Linkedin
        </a>
        <a
          href="#"
          className="text-white font-medium transition-all hover:-mt-4 block"
        >
          Twitter
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
