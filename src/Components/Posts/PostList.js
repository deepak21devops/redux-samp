import React from "react";
import { useSelector } from "react-redux";
import { allPosts } from "./PostSlice";
import SinglePosts from "./SinglePosts";
const PostList = () => {
  const posts = useSelector(allPosts);
  console.log(posts);

  return (
    <div>
      {posts.map((ele) => (
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
