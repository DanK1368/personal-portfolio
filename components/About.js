import Image from "next/image";
import profilePic from "../public/assets/profilePic.jpeg";

const About = () => {
  return (
    <section className=" w-full md:h-screen p-2 flex justify-center items-center py-16 ">
      <div className=" max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 place-content-center">
        <div className=" col-span-2 place-self-center">
          <p className=" uppercase text-xl tracking-widest text-primary ">
            About Me
          </p>
          <h2 className=" py-4  ">Who I am</h2>
          <p className=" text-gray-600 ">
            Junior Web-Developer with exposure to all stages of advanced web
            development. Adept in HTML, CSS / SASS, and JavaScript. Proficient
            in using REACT for building responsive SPA applications. Basic
            understanding of Python and the ability to implement the Django REST
            Framework for data management and creation of web-APIs.
          </p>
          <p>View some of my work</p>
        </div>

        <div className=" avatar h-auto m-auto shadow-xl shadow-gray-400 rounded-full hover:scale-105 ease-in duration-100">
          <div className=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              className="rounded-full object-cover  "
              src={profilePic}
              alt=""
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
