import Image from "next/image";
import Link from "next/link";

const ProjectItem = ({ title, bgImage, projectUrl, techDescription }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-accent">
      <Image
        className=" rounded-xl group-hover:opacity-10  "
        src={bgImage}
        alt=""
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-2xl text-white tracking-wider text-center ">
          {title}
        </h3>
        <p className=" pb-4 pt-2 text-white text-center ">{techDescription}</p>
        <Link href="/">
          <p className=" text-center py3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer hover:bg-primary hover:text-white">
            Check Me Out
          </p>
        </Link>
      </div>
    </div>
  );
};
export default ProjectItem;
