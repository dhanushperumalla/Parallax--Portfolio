import "./contact.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contacxct = () => {
  return (
    <motion.div
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
    >
      <motion.divdiv className="textContainer" variants={variants}>
        <motion.h1 variants={variants}>Lets Work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>dhanushperumalla2@gmail.com</span>
        </motion.div>
        <div className="item">
          <h2>Address</h2>
          <span>4 Road Center Krosuru</span>
        </div>
        <div className="item">
          <h2>Phone</h2>
          <span>+91 987654321</span>
        </div>
      </motion.divdiv>
      <div className="formContainer">
        <form action="">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea rows={8} placeholder="Message" />
          <button>Submit</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contacxct;
