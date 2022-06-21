import { colors, icons } from "../styles/global";
import { icon, links, logo, navbar, signs } from "../styles/homeStyle";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      style={navbar}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        style={logo}
        whileHover={{ scale: 1.1 }}
        drag
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
      >
        <h1>D</h1>
      </motion.div>

      <motion.div
        style={links}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <Link to="/" style={{ color: colors.text, textDecoration: "none" }}>
          <span className="link">Home</span>
        </Link>
        <Link
          to="/create"
          style={{ color: colors.text, textDecoration: "none" }}
        >
          <span className="link">Create a Blog</span>
        </Link>
      </motion.div>

      <motion.div
        style={signs}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <span style={icon}>{icons.twitter}</span>
        <span style={icon}>{icons.insta}</span>
        <span style={icon}>{icons.blogIcon}</span>
      </motion.div>
    </motion.nav>
  );
};
export default Navbar;
