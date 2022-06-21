import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "./components/Blog";
import Create from "./components/Create";
import Heading from "./components/Heading";
import Layout from "./components/Layout";
import List from "./components/List";
import Navbar from "./components/Navbar";
import { main } from "./styles/homeStyle";

const App = () => {
  const [pending, setPending] = useState(false);
  return (
    <Layout>
      <Navbar />
      <hr style={{ marginTop: "3rem", color: "black", size: "2px" }} />

      <Heading />

      <hr style={{ marginTop: "3rem", color: "black", size: "2px" }} />

      <div style={main}>
        <Routes>
          <Route
            path="/"
            element={<Blog pending={pending} setPending={setPending} />}
          />
          <Route path="/create" element={<Create setPending={setPending} />} />
          <Route
            path="/:id"
            element={<Blog pending={pending} setPending={setPending} />}
          />
        </Routes>

        <List pending={pending} />
      </div>
    </Layout>
  );
};

export default App;
