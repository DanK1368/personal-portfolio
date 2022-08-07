import dropshopImg from "../public/assets/dropshop-project.png";
import skilledImg from "../public/assets/skilled-screenshot.png";
import todoImg from "../public/assets/todo-screenshot.png";
import podImg from "../public/assets/pod-screenshot.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <section id="projects" className=" w-full ">
      <div className=" max-w-[1240px] mx-auto px-2 py-16 ">
        <p className=" text-xl tracking-widest uppercase text-primary ">
          Projects
        </p>
        <h2 className=" py-4 ">Things I have worked on</h2>
        <div className=" grid md:grid-cols-2 gap-8 ">
          <ProjectItem
            title="DropShop Final Project for SIT Academy"
            bgImage={dropshopImg}
            projectUrl="/dropshop"
            techDescription="React.js & Django REST Framework"
          />
          <ProjectItem
            title="Skilled Landing Page"
            bgImage={skilledImg}
            projectUrl="/dropshop"
            techDescription="React.js with Tailwind CSS and Framer Motion"
          />
          <ProjectItem
            title="Todo List "
            bgImage={todoImg}
            projectUrl="/dropshop"
            techDescription="Vanilla JS and SASS"
          />
          <ProjectItem
            title="Pod Landing Page"
            bgImage={podImg}
            projectUrl="/dropshop"
            techDescription="Vanilla JS and SASS"
          />
        </div>
      </div>
    </section>
  );
};
export default Projects;
