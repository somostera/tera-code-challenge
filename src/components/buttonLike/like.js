import React, { useState } from "react";
import "./like.style.css";

import { HiOutlineHeart } from "react-icons/hi";
import { HiHeart } from "react-icons/hi";

const Like = () => {
  const [like, setLike] = useState(false);

  function toggle() {
    let localLiked = like;

    localLiked = !localLiked;
    setLike({ like: localLiked });
  }

  return (
    <button className="btn-like" onClick={() => toggle()}>
      {like === false ? (
        <HiOutlineHeart className="start-heart-btn" />
      ) : (
        <HiHeart className="end-heart-btn" />
      )}
    </button>
  );
};

export default Like;
