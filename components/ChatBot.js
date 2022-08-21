import Image from "next/image";
import robotSvg from "../public/assets/icons/robot.svg";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const ChatBot = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  let welcomeText = "Hello, welcome to my Site";
  let chatText =
    "If you want to chat with me, just click on me...and lets talk";
  let infoText = "To close this text, tap on the message!";

  useEffect(() => {
    const handleMessage = () => {
      setTimeout(() => {
        setMessage(welcomeText);
        setShowMessage(true);
      }, 2000);

      setTimeout(() => {
        setMessage(chatText);
      }, 6000);

      setTimeout(() => {
        setMessage(infoText);
      }, 10000);
    };

    handleMessage();
  }, [infoText, welcomeText, chatText]);

  return (
    <div className="  w-full sticky top-[600px] z-50 min-h-[10vh] flex items-center justify-end pr-10 xs:top[750px]">
      <button
        className=" absolute top-[-70px] right-24 "
        onClick={() => setShowMessage(!showMessage)}
      >
        {showMessage && (
          <div className=" relative  w-[250px] h-[80px] bg-blue-300 rounded-md flex justify-center items-center text-white ">
            <p className=" text-xs p-2">{message}</p>
            <div className=" absolute w-0 h-0 border-t-[13px] border-t-transparent border-b-[13px] border-b-transparent border-l-[26px] border-l-blue-300 left-[85%] top-[100%] rotate-45 translate-y-[-50%] "></div>
          </div>
        )}
      </button>
      <div className=" animate-bounce right-0 max-w-[40px] ">
        <Image src={robotSvg} alt="" />
      </div>
    </div>
  );
};
export default ChatBot;
