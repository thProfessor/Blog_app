import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Blog = ({ pending, setPending }) => {
  const [blog, setBlog] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id ? id : "1"}`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
    setPending(false);
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/1`)
      .then((res) => res.json())
      .then((data) => setBlog(data));
    setPending(false);
  }, []);

  const deletehandler = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPending(true);
      navigate("/");
    });
  };
  return (
    <>
      {id ? (
        <div className="blogContainer" style={{ width: "48%" }}>
          <img src={blog.img} alt="imgage 1" />
          <h1>{blog.title}</h1>
          <p>{blog.body}</p>
          <button onClick={deletehandler}>Delete</button>
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
