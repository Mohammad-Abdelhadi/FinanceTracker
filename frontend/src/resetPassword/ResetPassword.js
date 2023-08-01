import React from "react";
import "./ResetPassword.css";
import createBack from "../Images/createBack.svg";
import { Link } from "react-router-dom";
const ResetPassword = () => {
  return (
    <>
      <div className="ResetPassword__createPasswordcontainer">
        <div className="ResetPassword__backcontainer">
          <img src={createBack} alt="" />
          <div className="ResetPassword__createpassword">
          <Link style={{color:"black",textDecoration:"none"}} to="/signin">Back</Link>

          </div>
        </div>
        <div className="ResetPassword__createPasswordtextcontainer">
          <div>Reset password</div>
          <div>
          Enter the email associates with your account and we’ll send an email with instructions to reset your password          </div>
        </div>
        <div className="ResetPassword__inputscontainer">
          <div className="ResetPassword__newpassword">
            <input type="text" placeholder="Enter your email " />
          </div>
        </div>
        <div className="ResetPassword__createPasswordbtn__container">
          <button type="submit"> 
          <Link style={{color:"white",textDecoration:"none"}} to="/EmailConfirm">Reset password</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;

