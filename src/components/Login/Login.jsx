import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: "",
    url: "",
  });

  const handleAvatar = (e) => {
    setAvatar({
      file: e.target.files[0],
      url: URL.createObjectURL(e.target.files[0]),
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    toast.success("sameer sattar")
  }

  return (
    <div className="login">
      <div className="item">
        <form action="" onSubmit={handleLogin}>
          <h2>Welcome Back</h2>
          <input type="email" name="email" placeholder="Enter your Email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button>Sign In</button>
        </form>
      </div>
      <div className="separator"></div>
      <div className="item">
        <form action="">
          <h2>Create an Account</h2>
          <label htmlFor="file">
            <img src={avatar.url || "./avatar.png"} alt="" />
            Uplod an image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            type="text"
            name="username"
            placeholder="Enter your Username"
          />
          <input type="email" name="email" placeholder="Enter your Email" />
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
          />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
