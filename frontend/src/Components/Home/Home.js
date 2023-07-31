import React, { useEffect } from "react";
import topBackground from "./Home.css";
import "./Home.css";
import ring from "../../Images/ring.svg";
import charge from "../../Images/charge.svg";
import dots from "../../Images/dots.svg";
import whitearrow from "../../Images/whitearrow.svg";
import incomeArrow from "../../Images/incomeArrow.svg";
import expensesArrow from "../../Images/expensesArrow.svg";
// import from firebase to get data
import Dollar from "../../Images/dollar-coin-svgrepo-com.svg";
import { useWalletContext } from "../../hooks/useWalletContext";
import { useAuthContext } from "../../hooks/useAuthContext";

const Home = () => {
   const { wallet, dispatch } = useWalletContext();
   const { user } = useAuthContext();

   useEffect(() => {
      const fetchWallet = async () => {
         const responce = await fetch("/api/wallet", {
            headers: {
               Authorization: `Bearer ${user.token}`,
            },
         });

         const json = await responce.json();

         if (responce.ok) {
            dispatch({ type: "SET_WALLET", payload: json });
         }
      };

      if (user) {
         fetchWallet();
      }
   }, [dispatch, user]);

   return (
      <>
         <div className="home-container">
            <div
               className="top"
               style={{
                  backgroundImage: `url(${topBackground})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
               }}
            >
               <div>
                  <div className="charge-container">
                     <p>9:41</p>
                     <img src={charge} alt="" />
                  </div>

                  <div className="name-container">
                     <div>
                        <p>Welcome</p>
                        <p>{user.username}</p>
                     </div>
                     <img src={ring} alt="" />
                  </div>
               </div>
               <div className="warpper">
                  <div className="profile-info-container">
                     <div className="balance-container">
                        <div className="total-balance">
                           <p>Total Balance</p>
                           <img src={whitearrow} alt="" />
                        </div>
                        <div>
                           <img src={dots} alt="" />
                        </div>
                     </div>
                     <p className="balance">
                        ${wallet === null ? 0 : wallet.balance.toFixed(1)}
                     </p>
                     <div className="expense-container">
                        <div className="income">
                           <img src={incomeArrow} alt="" />
                           <p>Income</p>
                        </div>
                        <div className="expenses">
                           <img src={expensesArrow} alt="" />
                           <p>expenses</p>
                        </div>
                     </div>
                     <div className="expenses-values">
                        <div className="income-value">
                           <p>
                              ${wallet === null ? 0 : wallet.income.toFixed(1)}
                           </p>
                        </div>
                        <div className="expense-value">
                           <p>
                              ${wallet === null ? 0 : wallet.expense.toFixed(1)}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="home__transiction-container">
               <div className="home__Transiction-history">
                  <p>Transiction history</p>
                  <p>see all</p>
               </div>
               {wallet !== null &&
                  wallet.transactions.map((transaction, i) => {
                     return (
                        <div className="transiction__homepage" key={i}>
                           <div className="home__left-side">
                              <div>
                                 <img src={Dollar} alt="" />
                              </div>
                              <div>
                                 <p>{transaction.category}</p>
                                 <p>{transaction.date}</p>
                              </div>
                           </div>
                           <div>
                              <p
                                 style={{
                                    color:
                                       transaction.type === "income"
                                          ? "green"
                                          : "red",
                                 }}
                              >
                                 ${(transaction.value * 1).toFixed(2)}
                              </p>
                           </div>
                        </div>
                     );
                  })}
            </div>
         </div>
      </>
   );
};

export default Home;
