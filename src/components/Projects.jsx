import { motion } from "framer-motion";

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

export const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/cfar/cfar-landing.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Biometric Attendance System(HRIS)</h3>
          <p>
            An HRIS Biometric Attendance System that utilizes the Digital Persona 4500 U.are.U fingerprint scanner (IoT) for secure and reliable employee check-in/out, centralizing attendance logs and seamlessly integrating with HR processes.
          </p>
          <div className="project-tech">
            <div className="tech-icon" title="React 19">
              <img src="/Icon/react.svg" alt="React 19" />
            </div>
            <div className="tech-icon" title="Node.js">
              <img src="/Icon/nodejs.svg" alt="Node.js" />
            </div>
            <div className="tech-icon" title="MySQL">
              <img src="/Icon/mysql.svg" alt="MySQL" />
            </div>
            <div className="tech-icon" title="JavaScript">
              <img src="/Icon/javascript.svg" alt="JavaScript" />
            </div>
            <div className="tech-icon" title="HTML">
              <img src="/Icon/html.svg" alt="HTML" />
            </div>
            <div className="tech-icon" title="CSS">
              <img src="/Icon/css.svg" alt="CSS" />
            </div>
            <div className="tech-icon" title="Socket.io">
              <img src="/Icon/socket.svg" alt="Socket.io" />
            </div>
            <div className="tech-icon" title="TailwindCSS">
              <img src="/Icon/tailwindcss.svg" alt="TailwindCSS" />
            </div>
            <div className="tech-icon" title="Git">
              <img src="/Icon/git.svg" alt="Git" />
            </div>
            <div className="tech-icon" title="GitHub">
              <img src="/Icon/github.svg" alt="GitHub" />
            </div>
            <div className="tech-icon" title="Laravel 12">
              <img src="/Icon/laravel.svg" alt="Laravel" />
            </div>
            <div className="tech-icon" title="CSharp">
              <img src="/Icon/csharp.svg" alt="CSharp" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/yugo/yugo.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>YUGO Point of Sale System</h3>
          <p>
            A comprehensive Point of Sale System for YUGO, a retail store that sells various products.
          </p>
          <div className="project-tech">
            <div className="tech-icon" title="PHP">
              <img src="/Icon/php.svg" alt="PHP" />
            </div>
            <div className="tech-icon" title="Bootstrap">
              <img src="/Icon/bootstrap.svg" alt="Bootstrap" />
            </div>
            <div className="tech-icon" title="JavaScript">
              <img src="/Icon/javascript.svg" alt="JavaScript" />
            </div>
            <div className="tech-icon" title="CSS">
              <img src="/Icon/css.svg" alt="CSS" />
            </div>
            <div className="tech-icon" title="HTML">
              <img src="/Icon/html.svg" alt="HTML" />
            </div>
            <div className="tech-icon" title="MySQL">
              <img src="/Icon/mysql.svg" alt="MySQL" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/agriyas.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Agriya Tourist Website</h3>
          <p>
            A sleek tourist site for Agriya, a tourist destination that offers various tourist attractions.
          </p>
          <div className="project-tech">
            <div className="tech-icon" title="HTML">
              <img src="/Icon/html.svg" alt="HTML" />
            </div>
            <div className="tech-icon" title="JavaScript">
              <img src="/Icon/javascript.svg" alt="JavaScript" />
            </div>
            <div className="tech-icon" title="CSS">
              <img src="/Icon/css.svg" alt="CSS" />
            </div>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: "url('/projects/kyle-portfolio.png')",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Kyle's Portfolio</h3>
          <p>
            A sleek portfolio website for Kyle, a full stack developer that offers various projects.
          </p>
          <div className="project-tech">
            <div className="tech-icon" title="HTML">
              <img src="/Icon/html.svg" alt="HTML" />
            </div>
            <div className="tech-icon" title="JavaScript">
              <img src="/Icon/javascript.svg" alt="JavaScript" />
            </div>
            <div className="tech-icon" title="CSS">
              <img src="/Icon/css.svg" alt="CSS" />
            </div>
            <div className="tech-icon" title="Framer Motion">
              <img src="/Icon/framer-motion.svg" alt="Framer Motion" />
            </div>
            <div className="tech-icon" title="GitHub">
              <img src="/Icon/github.svg" alt="GitHub" />
            </div>
            <div className="tech-icon" title="Vite">
              <img src="/Icon/tailwindcss.svg" alt="Vite" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
