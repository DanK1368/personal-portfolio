import ProjectItem from "./ProjectItem";
import { projects } from "../constants/projects";

const Projects = () => {
  return (
    <section id="projects" className=" w-full ">
      <div className=" max-w-[1240px] mx-auto px-2 py-16 ">
        <p className=" text-xl tracking-widest uppercase text-primary ">
          Projects
        </p>
        <h2 className=" py-4 ">Things I have worked on</h2>
        <div className=" grid md:grid-cols-2 gap-8 ">
          {projects.map((project) => (
            <ProjectItem key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
