import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id ? id : ""}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
    console.log(id);
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/1`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, []);
  return (
    <>
      {id ? (
        <div className="blogContainer" style={{ width: "48%" }}>
          <img src={blog.img} alt="imgage 1" />
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      ) : (
        <div className="blogContainer" style={{ width: "48%" }}>
          <img src={blog.img} alt="imgage 1" />
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
        </div>
      )}
    </>
  );
};

export default Blog;
