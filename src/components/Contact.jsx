import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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

// Contact information
const contactInfo = [
  {
    id: 1,
    type: "email",
    label: "Email",
    value: "rjkylegepolongcalabrador@gmail.com",
    icon: "fas fa-envelope",
    link: "mailto:rjkylegepolongcalabrador@gmail.com",
    color: "#EA4335",
  },
  {
    id: 2,
    type: "github",
    label: "GitHub",
    value: "rjkyle-dev",
    icon: "fab fa-github",
    link: "https://github.com/rjkyle-dev",
    color: "#333",
  },
  {
    id: 3,
    type: "facebook",
    label: "Facebook",
    value: "KyleDev",
    icon: "fab fa-facebook",
    link: "https://www.facebook.com/share/1AYLymYYsW/",
    color: "#1877F2",
  },
  {
    id: 4,
    type: "instagram",
    label: "Instagram",
    value: "@kyle.dev",
    icon: "fab fa-instagram",
    link: "#",
    color: "#E4405F",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  const handleContactClick = (link, type) => {
    if (type === "email") {
      window.location.href = link;
    } else {
      window.open(link, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="contact-header">
        <motion.h2
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
        >
          Get in Touch
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          viewport={{ once: true }}
          className="contact-subtitle"
        >
          Let's connect! Reach out through the form or find me on social media.
        </motion.p>
      </motion.div>

      <motion.div
        className="contact-wrapper"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Contact Form Section */}
        <motion.div className="contact-form-section" variants={fadeInUp}>
          <h3 className="contact-form-title">Send me a Message</h3>
          <motion.form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">
                <i className="fas fa-user"></i> Your Name
              </label>
              <motion.input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                required
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <i className="fas fa-envelope"></i> Your Email
              </label>
              <motion.input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                required
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <i className="fas fa-comment"></i> Message
              </label>
              <motion.textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                required
                rows="6"
                whileFocus={{ scale: 1.02 }}
                onChange={handleInputChange}
              />
            </div>

            <motion.button
              className="submit-btn"
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i> Sending...
                </>
              ) : (
                <>
                  <i className="fas fa-paper-plane"></i> Send Message
                </>
              )}
            </motion.button>

            {formStatus.message && (
              <motion.div
                className={`form-status ${
                  formStatus.success ? "success" : "error"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <i
                  className={`fas ${
                    formStatus.success ? "fa-check-circle" : "fa-exclamation-circle"
                  }`}
                ></i>
                {formStatus.message}
              </motion.div>
            )}

            {/* Contact Icons Section */}
            <motion.div className="contact-icons-section" variants={fadeInUp}>
              <div className="contact-info-grid">
                {contactInfo.map((contact) => (
                  <motion.div
                    key={contact.id}
                    className="contact-info-card"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleContactClick(contact.link, contact.type)}
                    title={contact.value}
                  >
                    <div
                      className="contact-icon-wrapper"
                      style={{ backgroundColor: `${contact.color}15` }}
                    >
                      <i
                        className={contact.icon}
                        style={{ color: contact.color }}
                      ></i>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.form>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
