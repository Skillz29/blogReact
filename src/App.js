import { useState } from "react";
import LoginPage from "./pages/LoginPage/LoginPage";
import MainBlock from "./components/MainBlock/MainBlock";

import "./App.css";

function App() {
  const [isLoggetIn, setIsLoggetIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <div className="App">
      {isLoggetIn ? (
        <MainBlock setIsLoggetIn={setIsLoggetIn} />
      ) : (
        <LoginPage setIsLoggetIn={setIsLoggetIn} />
      )}
    </div>
  );
}

export default App;
