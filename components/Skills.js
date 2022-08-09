import { frontEndSkills, backEndSkills, learning } from "../constants/skills";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section id="skills" className=" w-full lg:h-screen p-2 ">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className=" uppercase text-xl tracking-widest text-primary ">
          Skills
        </p>
        <h2 className=" py-4 ">What I have learned</h2>
        <div className=" w-full pt-10 grid grid-cols-2 lg:grid-cols-3 gap-10">
          <h3 className=" text-xl text-center col-span-full md:text-left">
            Front-End
          </h3>

          {frontEndSkills.map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
        </div>
        <div className=" w-full pt-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
          <h3 className=" text-xl text-center col-span-full md:text-left">
            Back-End
          </h3>

          {backEndSkills.map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
        </div>
        <div className=" w-full pt-5 grid grid-cols-2 lg:grid-cols-3 gap-10">
          <h3 className=" text-xl text-center col-span-full md:text-left">
            Learning
          </h3>
          {learning.map((skill) => (
            <SkillItem key={skill.id} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Skills;
