import { Toaster } from "react-hot-toast";
import {
  Navbar,
  Hero,
  ContactBar,
  Slide,
  Experience,
  Hire,
  Skills,
  Footer,
} from "./data/Components";
import { FaArrowUp } from "react-icons/fa";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
    const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 1); // يظهر إذا نزل المستخدم أكثر من 1 بكسل
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <Toaster />
      <Navbar />
      <Hero />
      <ContactBar />
      <Slide />
      <Experience />
      <Hire />
      <Skills />
      <Footer />
      <button
      onClick={scrollToTop}
      className={`bg-lavender hover:bg-lavender/70 cursor-pointer fixed right-0 bottom-0 mr-6 sm:mr-10 mb-6 sm:mb-10 flex size-12 items-center justify-center rounded-full text-xl text-white transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FaArrowUp />
    </button>
    </div>
  );
};

export default App;
