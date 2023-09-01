import Banner from "@/components/Banner";
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
    </main>
  );
};

export default Home;
