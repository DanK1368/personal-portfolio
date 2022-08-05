import Image from "next/image";
import cssIcon from "../public/assets/icons/css.png";
import htmlIcon from "../public/assets/icons/html5.png";
import sassIcon from "../public/assets/icons/sass.png";
import tailwindIcon from "../public/assets/icons/tailwind.png";
import javascriptIcon from "../public/assets/icons/js.png";
import reactIcon from "../public/assets/icons/reactjs.png";
import djangoIcon from "../public/assets/icons/django.png";
import pythonIcon from "../public/assets/icons/python.png";

const Skills = () => {
  return (
    <section className=" w-full lg:h-screen p-2 ">
      <div className=" max-w-[1240px] mx-auto flex flex-col justify-center h-full ">
        <p className=" uppercase text-xl tracking-widest text-primary ">
          Skills
        </p>
        <h2 className=" py-4 ">What I have learned</h2>
        <div className=" w-full pt-10 grid md:grid-cols-2 gap-10">
          <div className=" grid md:grid-cols-2 gap-8 ">
            <h3 className=" col-span-2 text-center uppercase text-xl">
              Front End
            </h3>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={htmlIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">HTML5</h3>
                </div>
              </div>
            </div>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={cssIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">CSS</h3>
                </div>
              </div>
            </div>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={sassIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">SASS</h3>
                </div>
              </div>
            </div>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={tailwindIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">TAILWIND</h3>
                </div>
              </div>
            </div>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={javascriptIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-xl tracking-wider ">Javascript</h3>
                </div>
              </div>
            </div>

            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={reactIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-xl tracking-wider ">REACT.JS</h3>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid md:grid-cols-2 gap-8  ">
            <h3 className=" col-span-2 text-center uppercase text-xl">
              BACK-End
            </h3>
            <div className=" p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={pythonIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">PYTHON</h3>
                </div>
              </div>
            </div>
            <div className="  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={djangoIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">DJANGO</h3>
                </div>
              </div>
            </div>

            <div className="  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={djangoIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">DJANGO</h3>
                </div>
              </div>
            </div>
            <div className="  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={djangoIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">DJANGO</h3>
                </div>
              </div>
            </div>
            <div className="  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={djangoIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">DJANGO</h3>
                </div>
              </div>
            </div>
            <div className="  p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-100 ">
              <div className=" flex justify-around items-center">
                <div>
                  <Image src={djangoIcon} alt="" width={100} height={100} />
                </div>
                <div>
                  <h3 className=" text-2xl tracking-wider ">DJANGO</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
