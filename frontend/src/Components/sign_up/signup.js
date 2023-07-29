import React, { useEffect } from "react";
import facebook from "../../Images/facebook.png";
import apple from "../../Images/apple.png";
import google from "../../Images/google.png";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import logo from "../../Images/logo.png";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [userName, setuserName] = useState("");
  const [con_pass, setcon_pass] = useState("");
  const [isValid, setIsValid] = useState();
  const [isValidPass, setIsValidPass] = useState();
  const [isValidcon_Pass, setIsValidcon_Pass] = useState();
  const [passwordType, setPasswordType] = useState("password");
  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  const handleChange = (e) => {
    setEmail(e.target.value);
    const regex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    setIsValid(regex.test(e.target.value));
  };
  const handleChange_pass = (e) => {
    setpass(e.target.value);
    const regex = /^(?=.*\d)(?=.*[A-Z])(?=.*[!#$%&?]).{8,}$/;
    setIsValidPass(regex.test(e.target.value));
  };
  const handleChange_con_pass = (e) => {
    setcon_pass(e.target.value);

    setIsValidcon_Pass(pass === e.target.value);
  };
  const handleChange_user_name = (e) => {
    setuserName(e.target.value);
  };

  const onClick = (e) => {
    e.preventDefault();
    let Email;
    let Pass;
    let name;

    if (localStorage.getItem("gmail") == null) {
      Email = [];
      Pass = [];
      name = [];
    } else {
      Email = JSON.parse(localStorage.getItem("gmail"));
      Pass = JSON.parse(localStorage.getItem("Pass"));
      name = JSON.parse(localStorage.getItem("user name"));
    }
    Pass.push(pass);
    name.push(userName);
    Email.push(email);

    localStorage.setItem("gmail", JSON.stringify(Email));
    localStorage.setItem("Pass", JSON.stringify(Pass));
    localStorage.setItem("user name", JSON.stringify(name));
  };



  return (
    <>
      <div className="sign-up-container">
        <div className="singup-logo">
          <img src={logo} alt="" />
          <div className="signup-logo-name">FlowFinance</div>
        </div>
        <div className="d-flex  flex-column align-items-center  input_up">
          <div className="sign_up ">
            <h1>Sign up</h1>
          </div>
          <form className="ms-5">
            <div className="mb-3 ">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder=" Email address"
                onChange={handleChange}
                required
              />
              <label
                for="exampleInputEmail1"
                className="form-label"
                id="label_email"
                style={{ color: isValid ? "green" : "red", width: "250px" }}
              >
                {isValid
                  ? ""
                  : email === ""
                  ? ""
                  : "Please enter the valid email format (e.g.example@email.com)"}
              </label>
            </div>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="exampleInputText"
                placeholder="User Name"
                onChange={handleChange_user_name}
                required
              />
            </div>
            <label></label>
            <div className="input-group mb-3">
              <input
                type={passwordType}
                className="form-control"
                aria-label="Text input with checkbox"
                placeholder="Password"
                onChange={handleChange_pass}
                required
              />
              <div className="input-group-text">
                <input
                  className="form-check-input mt-0"
                  type="checkbox"
                  value=""
                  aria-label="Checkbox for following text input"
                  onChange={togglePassword}
                />
              </div>
            </div>
            <label
              style={{ color: isValidPass ? "green" : "red", width: "250px" }}
            >
              {isValidPass
                ? ""
                : pass === ""
                ? ""
                : "Your password must have 8+ characters, a number, a capital letter and a special character."}{" "}
            </label>
            <div className="input-group mb-3">
              <input
                type={passwordType}
                className="form-control"
                aria-label="Text input with checkbox"
                placeholder="Confirm Password"
                onChange={handleChange_con_pass}
                required
              />
            </div>
            <label
              style={{
                color: isValidcon_Pass ? "green" : "red",
                width: "250px",
              }}
            >
              {isValidcon_Pass
                ? ""
                : con_pass === ""
                ? ""
                : "Those passwords didn't match. Try again"}
            </label>
            <div className="btn__div">
              <button
                type="submit"
                className="btn btn-primary  py-3 btn_Register "
                disabled={!(isValid && isValidPass && isValidcon_Pass)}
                onClick={onClick}
              >
                <Link to="/signin">Sign up</Link>
              </button>
            </div>
          </form>
        </div>
        <div className="continue_with mt-3">or continue with</div>
        <div className="d-flex justify-content-center gap-3 my-3">
          <img src={facebook} width="10%" alt="" />
          <img src={apple} width="10%" alt="" />
          <img src={google} width="10%" alt="" />
        </div>
      </div>
    </>
  );
};

export default Signup;
