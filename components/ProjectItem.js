import Image from "next/image";

const ProjectItem = ({ image, title, tags, source, liveSite }) => {
  return (
    <div className=" relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gray-800 ">
      <Image
        className=" rounded-xl group-hover:opacity-10  "
        src={image}
        alt=""
      />
      <div className=" hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className=" text-xl text-white tracking-wider text-center lg:text-3xl">
          {title}
        </h3>
        <div className=" flex justify-center items-center gap-2 py-5 ">
          {tags.map((tag, idx) => (
            <p
              key={idx}
              className=" badge badge-secondary text-xs w-max flex justify-center items-center "
            >
              {tag}
            </p>
          ))}
        </div>

        <div className=" flex justify-center items-center gap-4">
          <a
            href={source}
            target="_blank"
            rel="noreferrer"
            className="badge badge-info text-white lg:badge-lg  hover:scale-110"
          >
            Source
          </a>
          <a
            href={liveSite}
            target="_blank"
            rel="noreferrer"
            className="badge badge-info text-white lg:badge-lg hover:scale-110"
          >
            Live Site
          </a>
        </div>
      </div>
    </div>
  );
};
export default ProjectItem;
