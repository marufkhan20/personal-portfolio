import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-secondary py-10">
      <div className="container">
        <div className="flex items-center flex-wrap justify-center sm:justify-between gap-5">
          <Link href="/" className="font-semibold text-lg">
            MarufDev
          </Link>
          <span className="text-[13px]">
            © 2023 Geekfolio is Proudly Powered by Ui-ThemeZ
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
