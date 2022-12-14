import React, { useRef, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import mailImg from "../public/assets/mail.svg";
import Image from "next/image";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  const [formValues, setFormValues] = useState({
    user_subject: "",
    user_name: "",
    user_mobile: "",
    user_email: "",
    user_message: "",
  });

  const handleChange = (e) => {
    setFormValues((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jen6dp3",
        "contact_form",
        form.current,
        "bPTohevK5xyBpL71p"
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === 200) {
            toast.success("Email sent! I will get back to you asap.");
            setFormValues({
              user_subject: "",
              user_name: "",
              user_mobile: "",
              user_email: "",
              user_message: "",
            });
          }
        },
        (error) => {
          if (error) {
            toast.error("Oops! Something went wrong. Please try again!");
            console.log(error.text);
          }
        }
      );
  };

  return (
    <section id="contact" className=" w-full lg:min-h-screen ">
      <div className="max-w-[1240px] m-auto px-2 py-24 w-full">
        <p className="text-xl tracking-widest uppercase text-primary ">
          Contact
        </p>
        <h2 className="py-4"> Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={mailImg}
                  alt="picture"
                />
              </div>
              <div className="pt-4">
                <h2 className="py-2">Daniel K??tt</h2>
                <p className="text-secondary">Junior Front-End Developer</p>
                <p className="py-4">
                  {`I am currently looking for a full-time position. Let's
                    get in touch to discuss more.`}
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with Me</p>
                <div className="flex justify-start items-center gap-8 py-4">
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
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                      type="text"
                      name="user_name"
                      value={formValues.user_name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Mobile</label>
                    <input
                      className="border-2 rounded-md p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                      type="text"
                      name="user_mobile"
                      value={formValues.user_mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 p-3 rounded-md flex border-gray-300 focus:outline-none focus:border-primary"
                    type="email"
                    name="user_email"
                    value={formValues.user_email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-md p-3 flex border-gray-300 focus:outline-none focus:border-primary"
                    type="text"
                    name="user_subject"
                    value={formValues.user_subject}
                    onChange={handleChange}
                    required
                  />
                </div>{" "}
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 p-3 rounded-md border-gray-300 focus:outline-none focus:border-primary"
                    name="user_message"
                    rows="10"
                    value={formValues.user_message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                  ></textarea>
                </div>
                <button className="btn btn-primary text-lg tracking-widest w-full mt-5">
                  SUBMIT{" "}
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center py-12 ">
          <Link href="/">
            <div className="rounded-full bg-secondary shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-100 animate-bounce">
              <HiOutlineChevronDoubleUp color="white" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
