import React from "react";
// import './SuccessfulyWallet.css'
import createBack from "../../Images/createBack.svg";
import successful from "../../Images/successful.svg";
import { Link } from "react-router-dom";
import "./SuccessfulyWallet.css";
const SuccessfulyWallet = () => {
  return (
    <>
      <div className="SuccessfulyWallet__createPasswordcontainer">
        <div className="SuccessfulyWallet__content">
          <img src={successful} alt="" />
          <p className="SuccessfulyWallet__resetpassword">
            Transfer Successful
          </p>
          <p className="SuccessfulyWallet__secondarytxt">
            Transfers are reviewed which may result in delays or funds being
            frozen
          </p>
        </div>
        <div>
          <p className="SuccessfulyWallet__amount">860.0$</p>
        </div>

        <div className="SuccessfulyWallet__createPasswordbtn__container">
          <Link to="/homepage" style={{textDecoration:"none"}}>
            <button style={{    padding: "0 72px",width:"100%"}}
              type="submit"
            
            >
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default SuccessfulyWallet;
