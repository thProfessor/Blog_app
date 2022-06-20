import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { main } from "./styles/homeStyle";

const App = () => {
  return (
    <Layout>
      <Navbar />
      <hr style={{ marginTop: "3rem", color: "black", size: "2px" }} />

      <Heading />

      <hr style={{ marginTop: "3rem", color: "black", size: "2px" }} />

      <div style={main}>
        <Routes>
          <Route path="/" element={<Blog />} />
          <Route path="/:id" element={<Blog />} />
        </Routes>

        <List />
      </div>
    </Layout>
  );
};

export default App;
