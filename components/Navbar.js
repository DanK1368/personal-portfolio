import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/icons/logo.svg";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleShowNav = () => setShowNav(!showNav);

  useEffect(() => {
    const handleShowShadow = () =>
      window.scrollY >= 90 ? setShadow(true) : setShadow(false);

    window.addEventListener("scroll", handleShowShadow);
  }, []);

  return (
    <header
      className={
        shadow ? "fixed w-full h-20 shadow-xl z-10" : "fixed w-full h-20 z-10 "
      }
    >
      <div className=" flex justify-between items-center w-full h-full px-2 sm:px-6 md:px-10 2xl:px-16 ">
        <Image src={logo} alt="/" width={75} height={75} />
        <nav>
          <ul className=" hidden md:flex ">
            <Link href="/">
              <li className=" ml-10 text-sm uppercase hover:border-b hover:mb-[-1px] ">
                Home
              </li>
            </Link>
            <Link href={"/#about"}>
              <li className=" ml-10 text-sm uppercase hover:border-b hover:mb-[-1px] ">
                About
              </li>
            </Link>
            <Link href={"/#skills"}>
              <li className=" ml-10 text-sm uppercase hover:border-b hover:mb-[-1px] ">
                Skills
              </li>
            </Link>
            <Link href={"/#projects"}>
              <li className=" ml-10 text-sm uppercase hover:border-b hover:mb-[-1px] ">
                Projects
              </li>
            </Link>
            <Link href={"/#contact"}>
              <li className=" ml-10 text-sm uppercase hover:border-b hover:mb-[-1px] ">
                Get In Touch
              </li>
            </Link>
          </ul>

          <div className=" md:hidden ">
            <button className=" btn btn-ghost " onClick={handleShowNav}>
              <AiOutlineMenu size={25} />
            </button>
          </div>
        </nav>
      </div>

      <div
        className={
          showNav
            ? `md:hidden fixed left-0 top-0 w-full h-screen bg-black/70`
            : ""
        }
      >
        <div
          className={
            showNav
              ? ` fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-300`
              : `fixed left-[-100%] top-0 p-10 ease-in duration-300`
          }
        >
          <div>
            <div className=" flex w-full items-center justify-between ">
              <Image src={logo} alt="" width={60} height={60} />
              <button
                className=" btn btn-circle btn-xs"
                onClick={handleShowNav}
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
          <div className=" border-b border-gray-300 my-4 ">
            <p className=" w-[85%] md:w-[90%] py-4 ">
              Junior Full-Stack Developer
            </p>
          </div>
          <div className=" py-4 flex flex-col ">
            <ul className=" uppercase ">
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-accent hover:rounded-md hover:pl-4 hover:ease-in hover:duration-300 hover:text-white">
                  Home
                </li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-accent hover:rounded-md hover:pl-4 hover:ease-in hover:duration-300 hover:text-white">
                  About
                </li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-accent hover:rounded-md hover:pl-4 hover:ease-in hover:duration-300 hover:text-white">
                  Skills
                </li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-accent hover:rounded-md hover:pl-4 hover:ease-in hover:duration-300 hover:text-white">
                  Projects
                </li>
              </Link>
              <Link href="/">
                <li className=" py-4 text-sm hover:bg-accent hover:rounded-md hover:pl-4 hover:ease-in hover:duration-300 hover:text-white">
                  Contact Me
                </li>
              </Link>
            </ul>
            <div className=" pt-40 ">
              <p className=" uppercase tracking-widest text-secondary ">
                Get In Touch
              </p>
              <div className=" flex justify-between gap-10 items-center my-4 w-full sm:w-[80%] ">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/daniel-koett/"
                  rel="noreferrer"
                  className=" rounded-full bg-primary shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 "
                >
                  <FaLinkedinIn color="white" />
                </a>

                <a
                  target="_blank"
                  href="https://github.com/DanK1368"
                  rel="noreferrer"
                  className=" rounded-full bg-primary  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 "
                >
                  <FaGithub color="white" />
                </a>
                <a
                  target="_blank"
                  href="mailto: danielkoett@gmail.com"
                  rel="noreferrer"
                  className=" rounded-full bg-primary  shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 "
                >
                  <AiOutlineMail color="white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
