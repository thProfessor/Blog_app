import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Blog = ({ pending, setPending }) => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/blogs/1")
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [pending]);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id ? id : "1"}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlog(data);
      });
  }, [id]);

  const deleteHandler = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE",
    }).then(() => {
      setPending(!pending);
      navigate("/");
    });
  };

  return (
    <div className="blogContainer" style={{ maxWidth: "45%" }}>
      <img src={blog.img} alt="" />
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
      {blog ? <button onClick={deleteHandler}>Delete</button> : "Loading"}
    </div>
  );
};

export default Blog;
