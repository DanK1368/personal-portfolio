import { signOut } from "firebase/auth";
import { AiOutlineLogout } from "react-icons/ai";
import { auth } from "../lib/firebase";

const Logout = () => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <button
      className=" flex justify-center items-center gap-2 text-sm cursor-pointer hover:text-accent "
      onClick={handleLogout}
    >
      Logout
      <AiOutlineLogout size={20} />
    </button>
  );
};
export default Logout;
