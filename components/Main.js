import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import emoji from "../public/assets/icons/waveEmoji.svg";

const Main = () => {
  return (
    <main id="home" className=" w-full h-screen text-center ">
      <div className=" max-w-[1240px] w-full h-full mx-auto flex justify-center items-center ">
        <div>
          <h1 className=" py-4 text-gray-700 leading-snug  ">
            <Image src={emoji} alt="emoji" width={70} height={70} />
            Hello, I&apos;m <span className=" text-primary ">Daniel</span>{" "}
            <br />
            Junior Full-Stack Developer
          </h1>
          <p className="py-4 text-gray-600 max-w-[90%] mx-auto leading-7 md:max-w-[80%] ">
            I have exposure to all stages of advanced web development. Adept in{" "}
            <span className=" text-secondary ">HTML, CSS / SASS,</span> and{" "}
            <span className=" text-secondary ">JavaScript</span> . <br />{" "}
            Proficient in using <span className=" text-secondary ">REACT</span>{" "}
            for building responsive SPA applications. <br /> Basic understanding
            of <span className=" text-secondary ">Python</span> and the ability
            to implement the{" "}
            <span className=" text-secondary ">Django REST Framework</span> for
            data management and creation of web-APIs
          </p>
          <div className=" flex justify-between items-center max-w-[330px] m-auto py-4 ">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/daniel-koett/"
              rel="noreferrer"
              className=" rounded-full bg-primary shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 "
            >
              <FaLinkedinIn color="white" />
            </a>
            <a
              target="_blank"
              href="https://github.com/DanK1368"
              rel="noreferrer"
              className=" rounded-full bg-primary  shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 "
            >
              <FaGithub color="white" />
            </a>
            <a
              target="_blank"
              href="mailto: danielkoett@gmail.com"
              rel="noreferrer"
              className=" rounded-full bg-primary  shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 "
            >
              <AiOutlineMail color="white" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
