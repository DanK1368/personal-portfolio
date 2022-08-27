import { auth } from "../lib/firebase";

const style = {
  sent: `flex-row-reverse place-self-end text-end rounded-bl-full `,
  received: ` bg-secondary text-white place-self-start rounded-br-full `,
};

const ChatMessage = ({ text, timestamp, name, uid }) => {
  const messageClass =
    uid === auth.currentUser.uid ? `${style.sent}` : `${style.received}`;

  return (
    <div
      className={`flex items-center shadow-xl mx-4 my-6 py-1 px-3  z-[100] relative rounded-full bg-primary text-white ${messageClass}`}
    >
      <p className="absolute min-w-max  mt-[-2.5rem] text-gray-600 text-[7px]">
        {name}
      </p>
      <p className=" text-[10px] ">{text}</p>
    </div>
  );
};
export default ChatMessage;
