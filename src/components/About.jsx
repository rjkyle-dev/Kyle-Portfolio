import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import ProfileCard from "./Profile-Card";
// import Lanyard from "./Lanyard";

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

export const About = () => {
  return (
    <motion.section
      id="about"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
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
            avatarUrl="/personal-crop-removebg-preview.png"
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
        {/* <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} /> */}
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: -20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ marginLeft: '-2rem' }}
        >
          <div className="code-display">
            <SyntaxHighlighter
              language="typescript"
              customStyle={{
                margin: 0,
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 0.8)",
                backdropFilter: "blur(10px)",
                marginBottom: 50,
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe: DeveloperProfile = {
  codename: "KyleDev",
  origin: "Mayaon Montevista Davao de Oro",
  role: "Full Stack Developer & Software Developer",
  stack: {
    languages: ["JavaScript", "TypeScript", "MySQL", "PHP", "CSharp"],
    frameworks: ["React", "Next.js", "TailwindCSS", "Supabase", 
    "Node.js", 
    "Firebase"],
  },
  motto: [
    "choose progress, over perfection",
  ],
  missionStatement:
    "Turning ideas into interfaces and bugs into feature",
  availability: ["Available for hire", "Available for work",
  "Collaboration", "Commission","Freelance"],
};`}
            </SyntaxHighlighter>
          </div>

          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
        
      </div>
    </motion.section>
  );
};
