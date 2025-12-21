import { motion } from "framer-motion";
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
      <div className="hero-container" style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          style={{ textAlign: 'center', maxWidth: '100%', width: '100%' }}
        >
          <motion.div className="hero-badge" style={{ margin: '0 auto 1.5rem' }}>
            <span> Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            style={{ textAlign: 'center' }}
          >
            KyleDev
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp} style={{ textAlign: 'center' }}>
            {" "}
            Full Stack Developer
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp} style={{ textAlign: 'center' }}>
            I am a full stack developer with a passion for creating beautiful and functional web applications.
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer} style={{ justifyContent: 'center', marginTop: '2rem' }}>
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
              href="public\cv\CV-Labrador.pdf"
              download="KyleDev-CV.pdf"
              className="cta-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             Download CV
            </motion.a>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer} style={{ justifyContent: 'center', marginTop: '2rem' }}>
            <motion.a href="https://github.com/rjkyle-dev" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.facebook.com/share/1AYLymYYsW/" target="_blank">
              <i className="fab fa-facebook"> </i>
            </motion.a>
              {/* <motion.a href="https://twitter.com" target="_blank">
                <i className="fab fa-twitter"> </i>
              </motion.a> */}
          </motion.div>
        </motion.div>

      </div>
    </motion.section>
  );
};
