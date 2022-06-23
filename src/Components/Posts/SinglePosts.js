import React from "react";
import { useDispatch } from "react-redux";
import { addreaction } from "./PostSlice";

const SinglePosts = ({ post }) => {
  const dispatch = useDispatch();
  const reactionButtons = {
    like: "👍",
    share: "🙏",
    subscribe: "🖐️",
  };

  const emojiOptions = Object.entries(reactionButtons).map(([name, emoji]) => {
    return (
      <button
        key={name}
        onClick={() => dispatch(addreaction({ id: post.id, name: name }))}
      >
        {emoji}
        {post.templates[name]}
      </button>
    );
  });
  return <div>{emojiOptions}</div>;
};

export default SinglePosts;
