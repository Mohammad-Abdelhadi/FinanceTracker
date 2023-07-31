import React, { useContext, useEffect, useState } from "react";
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
import { AppContext } from "../../App";

const Home = () => {
   // get the sum of income and expenses.

   // const [sumIncome, setSumIncome] = useState(0);
   // const [sumExpense, setSumExpense] = useState(0);
   // defualt balance is 0 , and its changes depend in the income - outcome
   // const  {balance}  = {balance: 0}  ;
   // const totalBalance = sumExpense + sumIncome;

   // let index = localStorage.getItem("index");
   // let name = JSON.parse(localStorage.getItem("user name"));
   // let user_name = name[index];

   // const [categoriesList, setCategoriesList] = useState([]);
   // const expenseCollectionRef = collection(db, "expenses");

   // const getCategoriesList = async () => {
   //   const data = await getDocs(expenseCollectionRef);
   //   const filterData = data.docs.map((doc) => ({
   //     ...doc.data(),
   //     id: doc.id,
   //   }));
   //   setCategoriesList(filterData);
   // };

   // const { categoriesList, getCategoriesList } = useContext(AppContext);

   // useEffect(() => {
   //    let tempSumIncome = 0;
   //    let tempSumExpense = 0;
   //    categoriesList.forEach((card) => {
   //       if (card.expense > 0) {
   //          tempSumIncome += card.expense;
   //       } else {
   //          tempSumExpense += card.expense;
   //       }
   //    });
   //    setSumIncome(tempSumIncome);
   //    setSumExpense(tempSumExpense);
   //    window.scrollTo(0, 0);
   //    console.log("first1");
   // }, [categoriesList]);
   // useEffect(() => {
   //    getCategoriesList();
   //    console.log("first2");
   // }, []);

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
                        <p>Alaa</p>
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
                     <p className="balance">10</p>
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
                           <p>500</p>
                        </div>
                        <div className="expense-value">
                           <p>200</p>
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
               <div className="transiction__homepage">
                  <div className="home__left-side">
                     <div>
                        <img src={Dollar} alt="" />
                     </div>
                     <div>
                        <p>Sallary</p>
                        <p>15/8</p>
                     </div>
                  </div>
                  <div>
                     <p style={{ color: "green" }}>10000</p>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;
