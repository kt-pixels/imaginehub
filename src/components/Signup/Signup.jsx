import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const collectData = async () => {
    console.log(name, email, password);
    setName("");
    setEmail("");
    setPassword("");

    // API FETCHING FROM DATABASE

    try {
      let getDatabase = await fetch("http://localhost:8000/signup", {
        method: "post",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!getDatabase.ok) {
        throw new Error(`HTTP error! Status: ${getDatabase.status}`);
      }

      let collectData = await getDatabase.json();

      console.log(collectData);

      if (collectData.name && collectData.email && collectData.password) {
        localStorage.setItem("user", JSON.stringify(collectData));
        navigate("/");
      } else {
        alert("Please Fill The All Feilds");
        navigate("/sign-up");
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="singup-form">
      <h1 className="title">Register</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={collectData}>Sign Up</button>
      <p>
        Already have a account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
