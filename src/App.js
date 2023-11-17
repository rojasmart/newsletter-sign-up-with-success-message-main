import React, { useState } from "react";
import Img from "./assets/images/illustration-sign-up-desktop.svg";
import Icon from "./assets/images/icon-list.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value)) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="content">
          <h1 className="content-title">Stay updated!</h1>
          <p className="content-subtitle">
            Join 60,000+ product managers receiving monthly updates on:
          </p>
          <div className="content-list">
            <ul>
              <li>
                <img src={Icon} alt="content-icon" />
                Product discovery and building what matters
              </li>
              <li>
                <img src={Icon} alt="content-icon" />
                Measuring to ensure updates are a success
              </li>
              <li>
                <img src={Icon} alt="content-icon" />
                And much more!
              </li>
            </ul>
          </div>
          <div className="content-input">
            <label htmlFor="content-text-input">Email address</label>
            <input
              type="text"
              placeholder="email@company.com"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className={error ? "error-input" : "error"}
            />
            <button className="content-button">
              Subscribe to monthly newsletter
            </button>
          </div>
        </div>
        <div className="image">
          <img src={Img} alt="img-sign-up" />
        </div>
      </div>
    </div>
  );
}

export default App;
