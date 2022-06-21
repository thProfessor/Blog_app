import { useState } from "react";
import { colors } from "../styles/global";
import { useNavigate } from "react-router-dom";

const Create = ({ setPending }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [img, setImg] = useState("");
  const [author, setAuthor] = useState("author1");

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    const newBlog = {
      title,
      body,
      img,
      author,
    };

    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    }).then(() => {
      navigate("/");
      setPending(true);
    });
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "50%",
      }}
    >
      <h1>Create a new Blog</h1>
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <label>Title</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Body</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <label>Link for image</label>
        <input
          required
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="author1">Author 1</option>
          <option value="author2">Author 2</option>
          <option value="author3">Author 3</option>
        </select>
        <input
          type="submit"
          style={{
            cursor: "pointer",
            backgroundColor: colors.logo,
            color: colors.light,
            boxShadow: `4px 6px 15px -3px ${colors.text}`,
          }}
        />
      </form>
    </div>
  );
};

export default Create;
