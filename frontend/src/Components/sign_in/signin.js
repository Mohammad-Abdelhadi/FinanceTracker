import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import facebook from "../../Images/facebook.png";
import apple from "../../Images/apple.png";
import google from "../../Images/google.png";
import "./signin.css";
import useLogin from "../../hooks/useLogin";

const Signin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { login, isLoading, error } = useLogin();

   const handleSubmit = async (e) => {
      e.preventDefault();
      await login(email, password);

      localStorage.setItem("index", index);
   };

   // -------------------------------------------------------------------------------
   const [isMatchEmail, setIsMatchEmail] = useState(false);
   const [isMatchPass, setIsMatchPass] = useState(false);
   const [index, setIndex] = useState(-1);
   const [storedEmails, setStoredEmails] = useState([]);
   const [storedPasswords, setStoredPasswords] = useState([]);
   const [userName, setUserName] = useState([]);

   useEffect(() => {
      const emails = JSON.parse(localStorage.getItem("gmail")) || [];
      const passwords = JSON.parse(localStorage.getItem("Pass")) || [];
      const names = JSON.parse(localStorage.getItem("user name")) || [];

      setStoredEmails(emails);
      setStoredPasswords(passwords);
      setUserName(names);
   }, []);

   const onChangeEmail = (e) => {
      const userValue = e.target.value;
      setIsMatchEmail(false);

      const emailIndex = storedEmails.indexOf(userValue);
      const userNameIndex = userName.indexOf(userValue);

      if (emailIndex !== -1 || userNameIndex !== -1) {
         setIndex(emailIndex !== -1 ? emailIndex : userNameIndex);
         setIsMatchEmail(true);
      }
   };

   const onChangePass = (e) => {
      const userPassValue = e.target.value;
      setIsMatchPass(false);

      if (index !== -1 && storedPasswords[index] === userPassValue) {
         setIsMatchPass(true);
      }
   };

   const isInputEmpty = !isMatchEmail || !isMatchPass;
   return (
      <>
         <div className="contain">
            <div className="signin-logo">
               <img src={logo} alt="" />
               <div className="logo-name">FlowFinance</div>
            </div>
            <form onSubmit={handleSubmit}>
               <div className="d-flex align-items-center flex-column input">
                  <div className="sign_mono">
                     <h1>Sign in</h1>
                  </div>
                  <div className="signin-inputs-div">
                     <input
                        type="email"
                        placeholder="Email or Username"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                  </div>
                  <div>
                     <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                  </div>
                  {isInputEmpty && (isMatchEmail || isMatchPass) && (
                     <label
                        className="have-account"
                        style={{ marginLeft: "-50px", color: "red" }}
                     >
                        Not Match Email Or Wrong Password
                     </label>
                  )}
                 
                  <div className="error__container">
            { error && <div className="error__div">{error}</div>}
            </div>
               </div>
               <div>
                  {/* {error && <div>{error}</div>} */}
                  
                 
                  <button type="submit" className="btn btn-primary btn_sign_in">
                     {/* to do remove css style from link to button */}
                     {/* <Link>Sign In</Link> */}
                     Sign In
                  </button>
                  <div className="forgot_pas">
                     <Link to="/resetpassword">Forgot password ?</Link></div>
                  <div className="have-account">
                     If you don't have an account
                     <Link to="/signup">1
                        <span>&nbsp;Sign up here!</span>
                     </Link>
                  </div>
               </div>
               {/* <div className="signin-continue_with mt-1">or continue with</div>
               <div className="d-flex justify-content-center gap-3 my-4">
                  <img src={facebook} width="10%" alt="" />
                  <img src={apple} width="10%" alt="" />
                  <img src={google} width="10%" alt="" />
               </div> */}
            </form>
         </div>
      </>
   );
};

export default Signin;
