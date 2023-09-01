import Banner from "@/components/Banner";
import Blogs from "@/components/Blogs";
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
    </main>
  );
};

export default Home;
