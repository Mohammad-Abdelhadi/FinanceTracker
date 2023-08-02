import React, { useState } from "react";
import Time from "../../Images/Time.svg";
import Battery from "../../Images/Battery.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import ThreeDot from "../../Images/ThreeDot.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWalletContext } from "../../hooks/useWalletContext";
import WalletIcon from "../../Images/WalletIcon.png";

const ConfirmWallet = () => {
   const { user } = useAuthContext();
   const { dispatch, wallet } = useWalletContext();

   // // ADD NEW CATEGORIES TO DATA IN FIREBASE


   const [value, setValue] = useState("");
   const [email, setEmail] = useState("");
   const [error, setError] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

   }
      

     

   return (
      <>
         <div id="expense__container">
            <main id="expense__page" className="container">
               <div className="row position-relative">
                  {/* Mobile Info In top */}
                  <div className="col-12 center__battery ">
                     <div className="d-flex justify-content-between ">
                        <div>
                           <img alt="#" src={Time} />
                        </div>
                        <div>
                           <img alt="#" src={Battery} />
                        </div>
                     </div>
                  </div>
                  {/* Arrow Back and Three dot and page name */}
                  <div className="col-12">
                     <div className="d-flex justify-content-around mt-5">
                        <div>
                           <Link to="/Wallet">
                              <img alt="#" src={ArrowBack} />
                           </Link>
                        </div>
                        <div>
                           <Link className="text__edit" to="#">
                             Send Wallet
                           </Link>
                        </div>
                        <div>
                           <img alt="#" src={ThreeDot} />
                        </div>
                     </div>
                  </div>
               </div>
               {/* Cards that includes Form and input */}
               <form
                  className="position-absolute z-1 center__cards px-3 test"
                  onSubmit={handleSubmit}
               >
                <div className="py-3 text-center" style={{fontWeight:"bold",color:"#298ce7"}}>  Transfer Confirmation</div>
                  
                  <div className="my-3">
                     <label htmlFor="email">To</label>
                     <input
                  disabled
                  placeholder="Email user"
                        className={`form-control mt-2 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setEmail(e.target.value)}
                        value={value}

                        // onChange={(e) => setValue(e.target.value)}
                     />
                     <div></div>
                  </div>
                  <div className="my-3">
                     <label htmlFor="amount">Amount:</label>
                     <input
                        id="amount"
                        type="number"
                        placeholder="0$"
                        className={`form-control mt-2 `}
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                        disabled
                     />
                  </div>
                  <div className="container add__btn  ">
                     <div className="my-2">
                      <Link to="/successfulywallet">
                      <button
                           type="submit"
                           className="btn w-100 "

                           // disabled={
                           //    !selectedProcess ||
                           //    !selected ||
                           //    !selectedDate ||
                           //    !expenseValue
                           // }
                        >
                           send
                        </button></Link>
                     </div>
                  </div>
               </form>
               {/* Button Add  */}
            </main>
         </div>
      </>
   );
};

export default ConfirmWallet;
