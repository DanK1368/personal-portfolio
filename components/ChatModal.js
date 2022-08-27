import { useState, useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import SendMessage from "./SendMessage";
import SignIn from "./SignIn";
import { db } from "../lib/firebase";
import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import Logout from "./Logout";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

const ChatModal = () => {
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const search = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(search, querySnapshot => {
      let messages = [];
      querySnapshot.forEach(doc => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <div className=" fixed right-[50px] bottom-[70px] flex flex-col justify-between w-[200px] mx-auto h-[50vh] bg-slate-300 pt-3">
        <div className=" flex justify-end items-center px-4 ">
          {user ? <Logout /> : <SignIn />}
        </div>
        <div className=" flex flex-col overflow-scroll ">
          {messages &&
            messages.map(message => (
              <ChatMessage key={message.id} {...message} />
            ))}
          <span ref={scroll}></span>
        </div>
        <SendMessage scroll={scroll} />
      </div>
    </>
  );
};
export default ChatModal;
