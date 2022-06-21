import { heading } from "../styles/homeStyle";
import { motion } from "framer-motion";

const Heading = () => (
  <motion.h1
    initial={{ x: -200, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 2 }}
    style={heading}
  >
    THE BLOG
  </motion.h1>
);

export default Heading;
