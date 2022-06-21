import { useState, useEffect } from "react";
import { colors } from "../styles/global";
import { Link } from "react-router-dom";
function List({ pending }) {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, [pending]);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        rowGap: "2rem",
        maxWidth: "48%",
      }}
    >
      {blogs.map((blog) => {
        return (
          <Link
            key={blog.id}
            to={`/${blog.id}`}
            style={{
              display: "flex",
              alignItems: "flex-start",
              borderBottom: `1px solid ${colors.light}`,
              color: colors.text,
              textDecoration: "none",
            }}
          >
            <div
              className="imgBox"
              style={{
                display: "flex",
                alignItems: "center",
                width: "400px",
                height: "150px",
                backgroundImage: `url("${blog.img}")`,
                backgroundSize: "cover",
                marginBottom: "2rem",
                overflow: "hidden",
                marginRight: "1rem",
              }}
            ></div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "2rem",
                justifyContent: "center",
              }}
            >
              <h2>{blog.title}</h2>
              <p>{blog.body.substring(0, 20)}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default List;
