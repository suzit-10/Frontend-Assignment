import React from "react";
import "./login.css";

const LoginForm = ({
  setLoginDetails,
  loginDetails,
  onSubmit,
  remember,
  setRemember,
  numberError,
  setNumberError,
  credentialError,
  setCredentialError,
}) => {
  const handleNumberOnchange = (value) => {
    setLoginDetails({
      ...loginDetails,
      phoneNumber: value,
    });
    setNumberError(false);
    setCredentialError(false);
  };

  const handlePasswordOnchange = (value) => {
    setLoginDetails({
      ...loginDetails,
      password: value,
    });
    setCredentialError(false);
  };
  return (
    <>
      <div className="container">
        <div className="form-section">
          <form onSubmit={onSubmit} className="form-wrapper">
            <h3 className="form-header">Login</h3>
            <div className="form-phone-wrapper txt">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                value={loginDetails.phoneNumber}
                onChange={(e) => handleNumberOnchange(e.target.value)}
              />
              <span
                style={{
                  color: "red",
                  display: numberError ? "block" : "none",
                }}
              >
                please enter a numeric value
              </span>
            </div>
            <div className="form-password-wrapper txt">
              <label>Password</label>
              <input
                type="password"
                placeholder="Password"
                value={loginDetails.password}
                onChange={(e) => handlePasswordOnchange(e.target.value)}
              />
            </div>
            <div className="form-remember-wrapper">
              <div className="form-remembe-chkbox txt">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(!remember)}
                />
                <label>&nbsp; Remember my phone number</label>
              </div>
              <div className="form-forgot-pssword txt">
                <a href="#">Forgot Password</a>
              </div>
            </div>
            <center>
              <span
                style={{
                  color: "red",
                  display: credentialError ? "block" : "none",
                }}
              >
                Invalid Credentials
              </span>{" "}
            </center>
            <button className="form-submit-btn">Submit</button>
            <div className="qsn txt">
              <p className=" txt">Don't have account yet?</p>
            </div>
            <button className="create-account-btn">Create Account</button>
          </form>
        </div>

        <div className="image-section">
          <div className="image-wrapper">
            <img className="image" src="/img/login.png"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
