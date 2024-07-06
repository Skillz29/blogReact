import "./LoginPage_module.css";

import React, { useRef } from "react";

export default function LoginPage({ setIsLoggetIn }) {

  const loginRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = () => {

    const userData = {
      login: loginRef.current.value,
      password: passwordRef.current.value,
    }

    localStorage.setItem('isLoggedIn', true)

    setIsLoggetIn(true);
  }

  return (
    <form onSubmit={handleSubmit} className="loginform">
      <h1>LOGIN</h1>
      <div>
        <input
          ref={loginRef}
          type="text"
          placeholder="Login"
          name="login" required />
      </div>
      <div>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          name="password"
          required
        />
      </div>
      <div>
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}
