import React, { useEffect } from "react";
import facebook from "../../Images/facebook.png";
import apple from "../../Images/apple.png";
import google from "../../Images/google.png";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import logo from "../../Images/logo.png";
import useSignup from "../../hooks/useSignup";
const Signup = () => {
  const [email, setEmail] = useState("");
  const [pass, setpass] = useState("");
  const [username, setUsername] = useState("");

const {signup, isLoading, error}= useSignup()

const handleSubmit = async (e) => {
  e.preventDefault();
  
  await signup(username, email, pass)
  
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
  name.push(username);
  Email.push(email);

  localStorage.setItem("gmail", JSON.stringify(Email));
  localStorage.setItem("Pass", JSON.stringify(Pass));
  localStorage.setItem("user name", JSON.stringify(name));
};



  // -------------------------------------------------------------------------

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
    setUsername(e.target.value);
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
            {error && <div> {error} </div>}
          </div>
          <form className="ms-5"  onSubmit={handleSubmit}>
            <div className=" ">
              <input
                type="email"
                className="custom_input"
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
            <div className="">
              <input
                type="text"
                className="custom_input"
                placeholder="User Name"
                onChange={handleChange_user_name}
                required
              />
            </div>
            <label></label>
            <div className="input-group">
              <input
                type={passwordType}
                className="custom_input"
                placeholder="Password"
                onChange={handleChange_pass}
                required
              />
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
            <div className="input-group">
              <input
                type={passwordType}
                className="custom_input"
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
            {/* {error && <div className="error__div">{error}</div>} */}
            <div className="error__div">please enter your email</div>
            <div className="btn__div">
              <button
                type="submit"
                className="btn btn-primary btn_Register "
                disabled={!(isValid && isValidPass && isValidcon_Pass)}
               
              >
              Sign up
              </button>
            </div>
          </form>
        </div>
        {/* <div className="continue_with mt-3">or continue with</div>
        <div className="d-flex justify-content-center gap-3 my-3">
          <img src={facebook} width="10%" alt="" />
          <img src={apple} width="10%" alt="" />
          <img src={google} width="10%" alt="" />
        </div> */}
      </div>
    </>
  );
};

export default Signup;
