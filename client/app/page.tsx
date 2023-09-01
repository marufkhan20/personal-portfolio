import Banner from "@/components/Banner";
import Header from "@/components/Header";
import MyExperience from "@/components/MyExperience";
import OurServices from "@/components/OurServices";
import Projects from "@/components/Projects";

const Home = () => {
  return (
    <main>
      <Header />
      <Banner />
      {/* <PopularServices /> */}
      <OurServices />
      <Projects />
      <MyExperience />
    </main>
  );
};

export default Home;
