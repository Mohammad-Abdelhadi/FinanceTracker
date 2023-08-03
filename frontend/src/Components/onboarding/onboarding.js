import React, { useEffect } from "react";
import "./onboarding.css";
// import {useParams} from 'react-router-dom'
import man from "../../Images/man.png";
import backgrounblue from "../../Images/backgrounblue.svg";
import { Link } from "react-router-dom";
const Onboarding = () => {
   // const params = useParams()

   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <>
         <div
            className="d-flex align-items-center flex-column onboarding-container"
            style={{
               backgroundImage: `url(${backgrounblue})`,
               backgroundRepeat: "no-repeat",
               backgroundSize: "cover",
            }}
         >
            <img src={man} className="man__img" alt="#" />

            <div className="text">
               Spend Smarter
               <br /> Save More
            </div>
            <Link className="btn btn-primary  btn_start my-4 py-3" to="/signup">
               Get Started
            </Link>
            <div className="mb-4  have_account">
               Already Have Account ?
               <Link to="/signin" className="sign__in__link">
                  <span> sign in</span>
               </Link>
            </div>
         </div>
      </>
   );
};

export default Onboarding;
