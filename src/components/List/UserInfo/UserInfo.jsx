import React from "react";
import "./UserInfo.css";

const UserInfo = () => {
  return (
    <div className="userInfo">
      <div className="user">
        <img src="./avatar.png" alt="" />
        <h2>Sameer Sattar</h2>
      </div>
      <div className="icons">
        <img src="./more (1).png" alt="" />
        <img src="./video.png" alt="" />
        <img src="./edit.png" alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
