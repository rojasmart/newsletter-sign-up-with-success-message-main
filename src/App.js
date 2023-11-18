import React, { useState } from "react";
import Img from "./assets/images/illustration-sign-up-desktop.svg";
import Icon from "./assets/images/icon-list.svg";
import IconSuccess from "./assets/images/icon-success.svg";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [submit, setSubmit] = useState(false);
  const [validate, setValidate] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event) => {
    if (!isValidEmail(event.target.value) && submit === true) {
      setError("Email is invalid");
    } else {
      setError(null);
    }

    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (isValidEmail(email)) {
      console.log("the email is valid");
      setValidate(true);
    } else {
      setError("Valid email required");
    }
    setSubmit(true);
  };

  return (
    <div className="container">
      <div className={validate ? "card-success" : "card"}>
        {validate ? (
          <div className="content-success">
            <img src={IconSuccess} alt="icon-success" />
            <h1>Thanks for subscribing!</h1>
            <p>
              A confirmation email has been sent to <span>{email}</span>. Please
              open it and click the button inside to confirm your subscription.
            </p>
            <button
              className="content-button-success"
              onClick={() => setValidate(false)}
            >
              Dismiss message
            </button>
          </div>
        ) : (
          <>
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
                <form onSubmit={handleSubmit}>
                  <div className="content-labels">
                    <label htmlFor="content-text-input">Email address</label>
                    {error && (
                      <label
                        htmlFor="content-text-error"
                        className="email-error"
                      >
                        {error}
                      </label>
                    )}
                  </div>
                  <input
                    type="text"
                    placeholder="email@company.com"
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    className={error ? "error-input" : "error"}
                  />
                  <button className="content-button" type="submit">
                    Subscribe to monthly newsletter
                  </button>
                </form>
              </div>
            </div>
            <div className="image">
              <img src={Img} alt="img-sign-up" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
