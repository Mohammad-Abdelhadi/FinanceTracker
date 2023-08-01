import React from 'react'
import './EmailConfirm.css'
import createBack from "../Images/createBack.svg";
import emailIcon from "../Images/Email_icon.png"
import { Link } from 'react-router-dom';
const EmailConfirm = () => {
  return (
    <>
    <div className="EmailConfirm__createPasswordcontainer">
      <div className="EmailConfirm__backcontainer">
        <img src={createBack} alt="" />
        <div className="EmailConfirm__createpassword">Back</div>
      </div>
      <div className='EmailConfirm__content'>
        <img src={emailIcon} alt="" />
        <p className="EmailConfirm__resetpassword">Reset password</p>
        <p className="EmailConfirm__secondarytxt">
        we have sent a password recover instructions to your email
        </p>
      </div>
      
      <div className="EmailConfirm__createPasswordbtn__container">
        <button type="submit"> Open Email App</button>
      </div>
        <p className="EmailConfirm__skiptxt">
        <Link style={{color:"black",textDecoration:"none"}} to="/signin">skip , I will confirm later</Link>

        </p>
    </div>
  </>
  )
}

export default EmailConfirm