import React from "react";
import { useSelector } from "react-redux";
import { allPosts } from "./PostSlice";
import SinglePosts from "./SinglePosts";
const PostList = () => {
  const posts = useSelector(allPosts);
  const orderedPost = posts.slice().sort((a, b) => b - a);

  return (
    <div>
      {orderedPost.map((ele) => (
        <div key={ele.id} style={{ marginBottom: "30px" }}>
          <p>{ele.name}</p>
          <p>{ele.body}</p>
          <p>{ele.date}</p>
          <SinglePosts post={ele} />
        </div>
      ))}
    </div>
  );
};

export default PostList;
