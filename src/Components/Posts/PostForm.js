import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addPost,
  fetchUsers,
  allPosts,
  allStatus,
  allError,
} from "./PostSlice";
const PostForm = () => {
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

  const posts = useSelector(allPosts);
  const status = useSelector(allStatus);
  const error = useSelector(allError);

  const handlePost = (e) => {
    e.preventDefault();

    dispatch(addPost(username, body));
    setUsername("");
    setBody("");
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

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
