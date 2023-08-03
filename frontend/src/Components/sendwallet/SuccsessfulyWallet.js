import React from "react";
// import './SuccessfulyWallet.css'
import createBack from "../../Images/createBack.svg";
import successful from "../../Images/successful.svg";
import { Link } from "react-router-dom";
import "./SuccessfulyWallet.css";
import { useTransferContext } from "../../hooks/useTransferContext";
const SuccessfulyWallet = () => {
   const { transferInfo, dispatch } = useTransferContext();

   const handleClick = () => {
      dispatch({ type: "DELETE_TRANSFER_INFO", payload: null });
   };

   return (
      <>
         <div className="SuccessfulyWallet__createPasswordcontainer">
            <div className="SuccessfulyWallet__content">
               <img src={successful} alt="" />
               <p className="SuccessfulyWallet__resetpassword">
                  Transfer Successful
               </p>
               <p className="SuccessfulyWallet__secondarytxt">
                  Transfers are reviewed which may result in delays or funds
                  being frozen
               </p>
            </div>
            <div>
               <p className="SuccessfulyWallet__amount">
                  {transferInfo.value}$
               </p>
            </div>

            <div className="SuccessfulyWallet__createPasswordbtn__container">
               <Link
                  to="/homepage"
                  style={{ textDecoration: "none" }}
                  onClick={handleClick}
               >
                  <button
                     style={{ padding: "0 72px", width: "100%" }}
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
