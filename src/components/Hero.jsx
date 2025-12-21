import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ProfileCard from "./Profile-Card";
import Threads from "./Threads";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Hero = () => {
  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Threads
        amplitude={1}
        distance={0}
        enableMouseInteraction={true}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            KyleDev
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I am a full stack developer with a passion for creating beautiful and functional web applications.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View Projects
            </motion.a>
            <motion.a
              href="public/KyleDev-CV.pdf"
              download="KyleDev-CV.pdf"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             Download CV
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/rjkyle-dev" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://linkedin.com" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://twitter.com" target="_blank">
              <i className="fab fa-twitter"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="hero-image-container"
          variants={fadeInUp}
        >
          <ProfileCard
            name="KyleDev"
            title="Full Stack Developer"
            handle="rjkyle-dev"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl="public/personal-crop-removebg-preview.png"
            iconUrl=""
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={() => {
              const contactSection = document.getElementById('contacts');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};
