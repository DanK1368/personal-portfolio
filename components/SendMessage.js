import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { auth, db } from "../lib/firebase";

const SendMessage = ({ scroll }) => {
  const [inputValue, setInputValue] = useState("");

  const sendMessage = async e => {
    e.preventDefault();
    if (inputValue === "") {
      alert("Please enter a message");
      return;
    } else {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "messages"), {
        text: inputValue,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      });
    }

    setInputValue("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <form className=" h-10 w-full flex mx-auto" onSubmit={sendMessage}>
      <input
        className=" w-full text-base p-3 bg-gray-900 text-white outline-none border-none "
        type="text"
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        placeholder="Type here..."
      />
      <button
        className=" w-[20%] bg-primary text-base text-white hover:text-lg active:bg-secondary "
        type="submit"
      >
        Send
      </button>
    </form>
  );
};
export default SendMessage;
