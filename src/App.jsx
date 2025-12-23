import "./App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { TechStack } from "./components/TechStack";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Feature } from "./components/Feature";
import { FloatingDockDemo } from "./components/Floating-Icon";
// import { DotBackgroundDemo } from "./components/Dots-bg";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />
      {/* <FloatingDockDemo /> */}
      {/* <DotBackgroundDemo /> */}
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Feature />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 KyleDev. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
