import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.post}>
      <div className={s.postContent}>
        <img className={s.circle} src={props.postData.imgUrl} alt="" />
        <div className={s.postMessage}>{props.postData.message}</div>
      </div>
      <div className={s.postLikes}>{props.postData.likesCount} ❤️</div>
    </div>
  );
};

export default Post;
