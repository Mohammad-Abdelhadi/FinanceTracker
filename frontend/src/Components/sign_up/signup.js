import React from "react";
import { Link } from "react-router-dom";
import "./signup.css";
import { useState } from "react";
import logo from "../../Images/logo.png";
import useSignup from "../../hooks/useSignup";
const Signup = () => {
   const [email, setEmail] = useState("");
   const [password, setpassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [username, setUsername] = useState("");

   const { signup, isLoading, error } = useSignup();

   const handleSubmit = async (e) => {
      e.preventDefault();

      await signup(username, email, password, confirmPassword);
   };

   return (
      <>
         {isLoading && (
            <div className="spiner">
               <div className="circle-one"></div>
            </div>
         )}
         <div className="sign-up-container">
            <div className="singup-logo">
               <img src={logo} alt="" />
               <div className="signup-logo-name">FlowFinance</div>
            </div>
            <div className="d-flex  flex-column align-items-center  input_up">
               <div className="sign_up ">
                  <h1>Sign up</h1>
               </div>
               <form className="ms-5" onSubmit={handleSubmit}>
                  <label className="signup__label">Username</label>
                  <div className="">
                     <input
                        type="text"
                        className="custom_input"
                        placeholder="User Name"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        required
                     />
                  </div>
                  <label>Email</label>
                  <div className="1">
                     <input
                        type="email"
                        className="custom_input"
                        placeholder=" Email address"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                     />
                  </div>
                  <label className="signup__label">Password</label>
                  <div className="input-group">
                     <input
                        type="password"
                        className="custom_input"
                        placeholder="Password"
                        onChange={(e) => setpassword(e.target.value)}
                        required
                        value={password}
                     />
                  </div>
                  <label className="signup__label">Confirm password</label>
                  <div className="input-group">
                     <input
                        type="password"
                        className="custom_input"
                        placeholder="Confirm Password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        value={confirmPassword}
                        required
                     />
                  </div>
                  <label className="signup__label"></label>
                  <div className="signup__error__container">
                     {error && (
                        <div className="signup__error__div">{error}</div>
                     )}
                  </div>
                  <div className="btn__div">
                     <button
                        type="submit"
                        className="btn btn-primary btn_Register "
                        disabled={isLoading}
                     >
                        Sign up
                     </button>
                  </div>
               </form>
               <div className="signup_link">
                  If you already have an account register
                  <br />
                  You can{" "}
                  <Link to="/signin">
                     <span className="signup_link__span">
                        &nbsp;sign in here!
                     </span>
                  </Link>
               </div>
            </div>
         </div>
      </>
   );
};

export default Signup;
