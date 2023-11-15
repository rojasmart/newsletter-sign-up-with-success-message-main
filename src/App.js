import React from "react";
import Img from "./assets/images/illustration-sign-up-desktop.svg";
import Icon from "./assets/images/icon-list.svg";

function App() {
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
            <input type="text" placeholder="email@company.com" />
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
