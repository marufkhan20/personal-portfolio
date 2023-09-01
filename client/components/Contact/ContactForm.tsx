/* eslint-disable react/no-unescaped-entities */
const ContactForm = () => {
  return (
    <div>
      <form action="">
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-6">
            <input
              type="text"
              placeholder="Name"
              className="block w-full placeholder:text-white/40 text-white p-3 bg-transparent outline-none border border-white/20 rounded-lg focus:ring-1 focus:ring-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full placeholder:text-white/40 text-white p-3 bg-transparent outline-none border border-white/20 rounded-lg focus:ring-1 focus:ring-white"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="block w-full placeholder:text-white/40 text-white p-3 bg-transparent outline-none border border-white/20 rounded-lg focus:ring-1 focus:ring-white"
          />
          <textarea
            placeholder="Message"
            className="block w-full min-h-[170px] placeholder:text-white/40 text-white p-3 bg-transparent outline-none border border-white/20 rounded-lg focus:ring-1 focus:ring-white"
          />
          <button
            type="submit"
            className="block w-full border border-white rounded-full text-white transition-all hover:bg-white hover:text-black py-4"
          >
            Let's Talk
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
