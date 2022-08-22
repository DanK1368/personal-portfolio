import About from "../components/About";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Intro from "../components/Intro";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChatBot from "../components/ChatBot";
import ChatModal from "../components/ChatModal";

export default function Home() {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 2500);
  }, []);

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <AnimatePresence>
        {!showPage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Intro />
          </motion.div>
        )}
      </AnimatePresence>

      {showPage && (
        <>
          <Navbar />
          <Main />
          {/* <ChatBot /> */}
          <About />
          <Skills />
          <Projects />
          <Contact />

          {/* <ChatModal /> */}
        </>
      )}
    </>
  );
}
