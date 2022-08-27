import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../lib/firebase";

const SignIn = () => {
  const handleLogin = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
  };

  return (
    <button
      className=" flex justify-center items-center gap-2 text-sm cursor-pointer "
      onClick={handleLogin}
    >
      Sign in to chat
      <FcGoogle size={20} />
    </button>
  );
};
export default SignIn;
