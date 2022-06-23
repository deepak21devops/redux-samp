import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./PostSlice";
const PostForm = () => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const handlePost = (e) => {
    e.preventDefault();
    console.log(username, body);
    dispatch(addPost(username, body));
    setUsername("");
    setBody("");
  };
  return (
    <div>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        ></input>
      </div>

      <div>
        <label>Content: </label>
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></input>
      </div>
      <button onClick={(e) => handlePost(e)}>Add Post</button>
    </div>
  );
};

export default PostForm;
