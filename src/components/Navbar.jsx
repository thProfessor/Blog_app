import { icons } from "../styles/global";
import { icon, links, logo, navbar, signs } from "../styles/homeStyle";
const Navbar = () => {
  return (
    <nav style={navbar}>
      <div style={logo}>
        <h1>D</h1>
      </div>

      <div style={links}>
        <span className="link">Home</span>
        <span className="link">Create a Blog</span>
      </div>

      <div style={signs}>
        <span style={icon}>{icons.twitter}</span>
        <span style={icon}>{icons.insta}</span>
        <span style={icon}>{icons.blogIcon}</span>
      </div>
    </nav>
  );
};
export default Navbar;
