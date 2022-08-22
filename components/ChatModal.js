import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";

const ChatModal = () => {
  const scroll = useRef();

  return (
    <>
      <div className=" absolute top-0 right-0 w-full h-full bg-black/70 z-[70] ">
        <ChatMessage />
      </div>
      {/* Send Message Component */}
      <span ref={scroll}></span>
    </>
  );
};
export default ChatModal;
