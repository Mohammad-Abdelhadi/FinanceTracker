import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../Images/logo.png";
import "./signin.css";
import useLogin from "../../hooks/useLogin";

const Signin = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const { login, isLoading, error } = useLogin();

   const handleSubmit = async (e) => {
      e.preventDefault();
      await login(email, password);
   };

   return (
      <>
         {isLoading && (
            <div className="spiner">
               <div className="circle-one"></div>
            </div>
         )}
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
                  <div className="headline">
                     Manage Your Finances: Sign In to Your Secure Financial Hub
                  </div>
                  <label className="email__label">Email</label>
                  <div className="signin-inputs-div">
                     <input
                        type="email"
                        placeholder="Email or Username"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                     />
                  </div>
                  <label>Password</label>
                  <div>
                     <input
                        type="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                     />
                  </div>

                  <div className="error__container">
                     {error && <div className="error__div">{error}</div>}
                  </div>
               </div>
               <div>
                  <button type="submit" className="btn btn-primary btn_sign_in">
                     Sign In
                  </button>
                  <div className="forgot_pas">
                     <Link to="/resetpassword">Forgot password ?</Link>
                  </div>
                  <div className="have-account">
                     If you don't have an account
                     <Link to="/signup">
                        1<span>&nbsp;Sign up here!</span>
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
