import React, { useEffect, useState } from "react";
import "./expense.css";
import Time from "../../Images/Time.svg";
import Battery from "../../Images/Battery.svg";
import ArrowBack from "../../Images/ArrowBack.svg";
import ThreeDot from "../../Images/ThreeDot.svg";
import { Link } from "react-router-dom";
// firebase import
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config/firebase";

const Expense = () => {
  let index = localStorage.getItem("index");
  let emailId = JSON.parse(localStorage.getItem("gmail"));
  let email = emailId[index];
  console.log(email);

  const expenseCollectionRef = collection(db, email);

  // ADD NEW CATEGORIES TO DATA IN FIREBASE
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
  // Target Select Value
  const [selected, setSelected] = useState(options[0].value);
  const handleChange = (event) => {
    setSelected(event.target.value);
  };
  // Target Date input
  const [selectedProcess, setSelectedProcess] = useState("");
  const handleProcessChange = (event) => {
    setSelectedProcess(event.target.value);
  };
  const [selectedDate, setSelectedDate] = useState("");

  //  Target Amount input Value

  const [expenseValue, setExpenseValue] = useState(0);
  const handleamount = (e) => {
    setExpenseValue(e.target.value);
  };

  console.log(expenseValue);

  const onSubmitExpense = async () => {
    const expense = Number(expenseValue);
    await addDoc(expenseCollectionRef, {
      categories: selected,
      // i change this to target the correct income process
      // the value of the selected process become (income-outcome)
      // and i make function for the selcted process to target the value

      expense: selectedProcess === "income" ? expense : -expense,
      date: selectedDate,
    });
  };
  // END CODE ADD NEW CATEGORIES TO DATA IN FIREBASE

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <form className="position-absolute z-1 center__cards px-3 ">
            <div className="my-3">
              <label htmlFor="process">Process :</label>
              <select
                id="process"
                className="form-select mt-2"
                aria-label="Default select example"
                value={selectedProcess}
                onChange={handleProcessChange}
                required
              >
                <option selected>Choose Your Process</option>
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
                value={selected}
                onChange={handleChange}
              >
                {options.map((option) => (
                  <>
                    <option key={option.value} value={option.value} selected>
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
                className={`form-control mt-2 `}
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-default"
                onChange={handleamount}
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
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
            </div>
          </form>
          {/* Button Add  */}
          <div className="container add__btn  ">
            <div className="my-2">
              <Link to="/homepage">
                <button
                  className="btn w-100 "
                  onClick={onSubmitExpense}
                  disabled={
                    !selectedProcess ||
                    !selected ||
                    !selectedDate ||
                    !expenseValue
                  }
                >
                  Add
                </button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Expense;
