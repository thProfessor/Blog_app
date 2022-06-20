import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { colors } from "../styles/global";

const List = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
              textDecoration: "none",
              color: colors.text,
            }}
          >
            <div
              className="imgBox"
              style={{
                display: "flex",
                alignItems: "center",
                width: "400px",
                height: "150px",
                overflow: "hidden",
                marginRight: "1rem",
                backgroundImage: `url("${blog.img}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginBottom: "2rem",
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
};

export default List;
