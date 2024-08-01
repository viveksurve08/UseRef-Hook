import React, { useRef, useState } from "react";

export const UseRef = () => {
  const username = useRef(null);
  const password = useRef(null);

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const usernameValue = username.current.value;
    const passwordValue = password.current.value;

    let usernameError = "";
    let passwordError = "";

    if (usernameValue.trim() === "") {
      usernameError = "Username is required.";
    } else if (usernameValue.length < 3) {
      usernameError = "Username must be at least 3 characters long.";
    }

    if (passwordValue.trim() === "") {
      passwordError = "Password is required.";
    } else if (passwordValue.length < 8) {
      passwordError = "Password must be at least 6 characters long.";
    }

    if (usernameError || passwordError) {
      setErrors({ username: usernameError, password: passwordError });
      return;
    }

    console.log("Username:", usernameValue);
    console.log("Password:", passwordValue);

    username.current.value = "";
    password.current.value = "";

    setErrors({ username: "", password: "" });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="input-container">
          <input
            type="text"
            id="username"
            ref={username}
            placeholder="Username"
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && (
            <span className="error-message">{errors.username}</span>
          )}
        </div>

        <div className="input-container">
          <input
            type="password"
            id="password"
            ref={password}
            placeholder="Password"
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && (
            <span className="error-message">{errors.password}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
