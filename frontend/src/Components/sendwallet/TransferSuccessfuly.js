import React from "react";
import successful from "../../Images/successful.svg";
import { Link } from "react-router-dom";
import "./TransferSuccessfuly.css";
import { useTransferContext } from "../../hooks/useTransferContext";
const TransferSuccessfuly = () => {
   const { transferInfo, dispatch } = useTransferContext();

   const handleClick = () => {
      dispatch({ type: "DELETE_TRANSFER_INFO", payload: null });
   };

   return (
      <>
         <div className="TransferSuccessfuly__createPasswordcontainer">
            <div className="TransferSuccessfuly__content">
               <img src={successful} alt="" />
               <p className="TransferSuccessfuly__resetpassword">
                  Transfer Successful
               </p>
               <p className="TransferSuccessfuly__secondarytxt">
                  Transfers are reviewed which may result in delays or funds
                  being frozen
               </p>
            </div>
            <div>
               <p className="TransferSuccessfuly__amount">
                  $ {transferInfo.value}
               </p>
            </div>

            <div className="TransferSuccessfuly__createPasswordbtn__container">
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

export default TransferSuccessfuly;
