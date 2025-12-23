import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

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

// Tech stack data with skill percentages
const techStacks = [
  { name: "React", icon: "/Icon/react.svg", skill: 90 },
  { name: "JavaScript", icon: "/Icon/javascript.svg", skill: 80 },
  { name: "Node.js", icon: "/Icon/nodejs.svg", skill: 70 },
  { name: "MySQL", icon: "/Icon/mysql.svg", skill: 90 },
  { name: "PHP", icon: "/Icon/php.svg", skill: 92 },
  { name: "HTML", icon: "/Icon/html.svg", skill: 91 },
  { name: "CSS", icon: "/Icon/css.svg", skill: 91 },
  { name: "TailwindCSS", icon: "/Icon/tailwindcss.svg", skill: 92 },
  { name: "Laravel", icon: "/Icon/laravel.svg", skill: 85 },
  { name: "CSharp", icon: "/Icon/csharp.svg", skill: 60 },
  { name: "Socket.io", icon: "/Icon/socket.svg", skill: 60 },
  { name: "Git", icon: "/Icon/git.svg", skill: 85 },
  { name: "GitHub", icon: "/Icon/github.svg", skill: 88 },
  { name: "Bootstrap", icon: "/Icon/bootstrap.svg", skill: 80 },
  { name: "Firebase", icon: "/Icon/firebase.svg", skill: 75 },
  { name: "Figma", icon: "/Icon/figma-svgrepo-com.svg", skill: 80 },
  // { name: "MongoDB", icon: "/Icon/mongodb.svg", skill: 70 },
];

const TechStackItem = ({ tech, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const itemRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (itemRef.current) {
      observer.observe(itemRef.current);
    }

    return () => {
      if (itemRef.current) {
        observer.unobserve(itemRef.current);
      }
    };
  }, []);

  return (
    <motion.div
      ref={itemRef}
      className="tech-stack-item"
      variants={fadeInUp}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      <div className="tech-stack-header">
        <div className="tech-icon-wrapper">
          <img src={tech.icon} alt={tech.name} className="tech-stack-icon" />
        </div>
        <div className="tech-stack-info">
          <h4 className="tech-stack-name">{tech.name}</h4>
          <span className="tech-stack-percentage">{tech.skill}%</span>
        </div>
      </div>
      <div className="progress-bar-container">
        <motion.div
          className="progress-bar"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${tech.skill}%` } : { width: 0 }}
          transition={{
            duration: 1.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        />
      </div>
    </motion.div>
  );
};

export const TechStack = () => {
  return (
    <motion.section
      id="tech-stack"
      className="tech-stack-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2rem" }}>
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          style={{ margin: 0 }}
        >
          Tech Stack & Skills
        </motion.h2>
      </div>
      <motion.div
        className="tech-stack-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {techStacks.map((tech, index) => (
          <TechStackItem key={tech.name} tech={tech} index={index} />
        ))}
      </motion.div>
    </motion.section>
  );
};

