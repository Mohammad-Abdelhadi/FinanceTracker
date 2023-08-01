import React, { useState } from "react";
import "./expense.css";
import Time from "../../Images/Time.svg";
import Battery from "../../Images/Battery.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import ThreeDot from "../../Images/ThreeDot.svg";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useWalletContext } from "../../hooks/useWalletContext";

const Expense = () => {
   const { user } = useAuthContext();
   const { dispatch, wallet } = useWalletContext();

   // // ADD NEW CATEGORIES TO DATA IN FIREBASE
   const options = [
      { value: "", text: "--Choose an option--" },
      { value: "car", text: "Car" },
      { value: "salary", text: "salary" },
      { value: "bill", text: "Bill" },
      { value: "rent", text: "Rent" },
      { value: "education", text: "Education" },
      { value: "phone", text: "Phone" },
      { value: "health", text: "Health" },
   ];

   const [type, setType] = useState("");
   const [category, setCategory] = useState(options[0].value);
   const [value, setValue] = useState("");
   const [date, setDate] = useState("");
   const [error, setError] = useState(null);

   const handleSubmit = async (e) => {
      e.preventDefault();

      const transaction = { type, category, value, date };

      const response = await fetch("/api/wallet/add", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
         },
         body: JSON.stringify(transaction),
      });

      const json = await response.json();

      if (!response.ok) {
         setError(json.error);
         console.log(error);
      }
      if (response.ok) {
         setType("");
         setCategory("");
         setValue("");
         setDate("");
         setError(null);
         wallet.transactions.unshift(transaction);
         if (type === "income") {
            wallet.income = wallet.income + parseInt(value);
         } else if (type === "expense") {
            wallet.expense += parseInt(value);
         }
         wallet.balance = parseInt(wallet.income) - parseInt(wallet.expence);
         dispatch({ type: "SET_WALLET", payload: wallet });
      }
   };

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
                              Add Expense or Income
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
                  className="position-absolute z-1 center__cards px-3 "
                  onSubmit={handleSubmit}
               >
                  <div className="my-3">
                     <label htmlFor="process">Process :</label>
                     <select
                        id="process"
                        className="form-select mt-2"
                        aria-label="Default select example"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                     >
                        <option defaultValue>Choose Your Process</option>
                        <option value="income">Income</option>
                        <option value="expense">Expense</option>
                     </select>
                  </div>
                  <div className="my-3">
                     <label htmlFor="process">Categories :</label>
                     <select
                        id="process"
                        className="form-select mt-2"
                        aria-label="Default select example"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                     >
                        {options.map((option, index) => (
                           <>
                              <option
                                 key={index}
                                 value={option.value}
                                 defaultValue
                              >
                                 {option.text}
                              </option>
                           </>
                        ))}
                     </select>
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
                     />
                  </div>
                  <div className="my-4">
                     <label htmlFor="date">Date:</label>
                     <input
                        id="date"
                        type="date"
                        className="form-control mt-2"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-default"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                     />
                  </div>
                  <div className="container add__btn  ">
                     <div className="my-2">
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
                           Add
                        </button>
                     </div>
                  </div>
               </form>
               {/* Button Add  */}
            </main>
         </div>
      </>
   );
};

export default Expense;
