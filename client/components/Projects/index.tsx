import Heading from "../common/Heading";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section className="pb-28">
      <div className="container">
        <Heading title="My Projects" subTitle="Recent Projects" center />
        <div className="grid grid-cols-3 gap-8 mt-10">
          <ProjectItem
            thumbnail="/img/projects/2.jpg"
            category="DESIGN ART"
            title="Character Design"
          />
          <ProjectItem
            thumbnail="/img/projects/3.jpg"
            category="DESIGN ART"
            title="Arch Website Design"
          />
          <ProjectItem
            thumbnail="/img/projects/5.jpg"
            category="DESIGN ART"
            title="Sheno Brand Identity"
          />
          <ProjectItem
            thumbnail="/img/projects/6.jpg"
            category="DESIGN ART"
            title="Digital research"
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
