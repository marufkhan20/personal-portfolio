import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import MyExperience from "@/components/MyExperience";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      {/* <PopularServices /> */}
      <OurServices />
      <Projects />
      <MyExperience />
      <Testimonials />
      <Blogs />
      <Contact />
    </main>
  );
};

export default Home;
