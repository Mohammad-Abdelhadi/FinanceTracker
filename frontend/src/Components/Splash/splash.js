import React from "react";
import "./splash.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import splash from '../../Images/splash.gif'
const Splash = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      navigate("/onboarding"); 
    }, 11000);
    return () => clearTimeout(redirectTimeout);
  }, [navigate]);

  return (
    <div className="splash__container">
      <img src={splash} alt=""  className="splash-img"/>

      {/* <div className="logo"></div> */}
    </div>
  );
};

export default Splash;
