import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/login/LoginForm";
import { setUserData } from "../redux/actions/authAction";
import { login } from "../services/auth.api";

const LoginPage = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loginDetails, setLoginDetails] = useState({
    phoneNumber: "",
    password: "",
  });
  const [remember, setRemember] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [credentialError, setCredentialError] = useState(false);

  const validation = () => {
    var pattern = new RegExp(/^[0-9\b]+$/);
    if (
      loginDetails.phoneNumber !== undefined ||
      loginDetails.phoneNumber !== null
    ) {
      if (!pattern.test(loginDetails.phoneNumber)) {
        setNumberError(true);
        return false;
      } else {
        return true;
      }
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (validation()) {
      const response = await login(loginDetails);
      if (response) {
        dispatch(setUserData(response.data.user));
        if (remember) {
          localStorage.setItem("phone", loginDetails.phoneNumber);
        }
        navigate("/home");
      } else {
        setCredentialError(true);
      }
      setLoginDetails({
        ...loginDetails,
        ["phoneNumber"]: "",
        ["password"]: "",
      });
    }
  };
  useEffect(() => {
    if ("phone" in localStorage) {
      setLoginDetails({
        ...loginDetails,
        phoneNumber: localStorage["phone"],
      });
    }
  }, []);

  return (
    <>
      <LoginForm
        setLoginDetails={setLoginDetails}
        loginDetails={loginDetails}
        onSubmit={onSubmit}
        remember={remember}
        setRemember={setRemember}
        numberError={numberError}
        setNumberError={setNumberError}
        credentialError={credentialError}
        setCredentialError={setCredentialError}
      />
    </>
  );
};

export default LoginPage;
