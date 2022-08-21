import Image from "next/image";
import robotSvg from "../public/assets/icons/robot.svg";
import { motion } from "framer-motion";

const ChatBot = () => {
  return (
    <motion.div
      drag
      className=" w-full sticky top-[650px] z-50 min-h-[10vh] flex items-center justify-end pr-10 xs:top[750px]"
    >
      <div className=" animate-bounce right-0 max-w-[40px] ">
        <Image src={robotSvg} alt="" />
      </div>
    </motion.div>
  );
};
export default ChatBot;
