import React, { useContext, useEffect } from "react";
import BlackTime from "../../Images/BlackTime.svg";
import BlackBattery from "../../Images/BlackBattery.svg";
import ThreeDot from "../../Images/BlackThreeDot.svg";
import Blackarrow from "../../Images/Blackarrow.svg";
import Filter from "../../Images/Filter.svg";
import "./Statistic.css";
import { Link } from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
// import from firebase to get data
import Dollar from "../../Images/dollar-coin-svgrepo-com.svg";
import { AppContext } from "../../App";

const Statistic = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  // Function that get the data from FirBase
  // const [categoriesList, setCategoriesList] = useState([]);
  // const expenseCollectionRef = collection(db, "expenses");
  // const getCategoriesList = async () => {
  //   const data = await getDocs(expenseCollectionRef);
  //   const filterData = data.docs.map((doc) => ({
  //     ...doc.data(),
  //     id: doc.id,
  //   }));
  //   console.log(filterData);
  //   setCategoriesList(filterData);
  // };
  // useEffect(() => {
  //   getCategoriesList();
  // }, []);
  const { categoriesList, getCategoriesList} =useContext(AppContext)

  // Charts code

  const topSpendingData = categoriesList
    .filter((card) => card.expense < 0) // Filter expenses (negative values)
    .sort((a, b) =>  a.expense -b.expense)
    .slice(0, 3);

  const data = {
    labels: topSpendingData.map((card) => card.categories),
    datasets: [
      {
        label: "poll",
        data: topSpendingData.map((card) => card.expense),
        backgroundColor: ["#004dff", "#ffda00", "#ff4d33"],
        borderColor: ["#004dff", "#ffda00", "#ff4d33"],
      },
    ],
  };

  const options = {};
  // End Charts code

  useEffect(() => {
    window.scrollTo(0, 0);
    getCategoriesList()
    console.log(1)
  }, []);
  return (
    <>
      <main id="stat-container">
        {/* Mobile Info In top  Statistic page*/}
        <div className="col-12 center__battery">
          <div className="d-flex justify-content-between">
            <div>
              <img alt="#" src={BlackTime} />
            </div>
            <div>
              <img alt="#" src={BlackBattery} />
            </div>
          </div>
        </div>
        {/* Arrow Back and Three dot and page Name */}
        <div className="col-12">
          <div className="d-flex justify-content-around mt-5">
            <div>
              <Link to="/HomePage">
                <img alt="#" src={Blackarrow} />
              </Link>
            </div>
            <div>
              <Link
                className="text-decoration-none text-color-black"
                style={{ color: "black" }}
                to="#"
              >
                Statistic
              </Link>
            </div>
            <div>
              <img alt="#" src={ThreeDot} />
            </div>
          </div>
        </div>
        {/* Choose The Time btn*/}
        <div
          className="btn-group-horizontal mx-2 my-5"
          role="group"
          aria-label="Options"
        >
          <button
            type="button"
            className="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Day
          </button>
          <button
            type="button"
            className="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Week
          </button>
          <button
            type="button"
            className="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Month
          </button>
          <button
            type="button"
            className="btn btn-outline-primary border-0 btn-radio mx-3"
            style={{ color: "black" }}
          >
            Year
          </button>
        </div>
        {/* Charts Container */}
        <div
          style={{}}
          className="container d-flex justify-content-center mt-5 doughnut-chart"
        >
          <Doughnut data={data} options={options}></Doughnut>
        </div>
        {/* Top spending  */}
        <div className="statics__transiction-container">
          <div className="statics__Transiction-history">
            <p>Top Spending</p>
            <img alt="#" src={Filter} />
          </div>
          <div className="transiction-data">
            {/* start transictions */}
            {topSpendingData.map((card) => (
              <div
                style={{ width: "100%" }}
                className="statics__transiction"
                key={card.id}
              >
                <div className="statics__left-side">
                  <div>
                    <img src={Dollar} alt="#" />
                  </div>
                  <div>
                    <h6>{card.categories}</h6>
                    <h6>{card.date}</h6>
                  </div>
                </div>
                <div>
                  <p style={{ color: "red" }}>
{/* if i dont type the math.abs , he will got value like this ( -$-250) */}
{/* so i put before that the minus sign (-)  */}
                    {/* -${Math.abs(card.expense)} */}
                    {/* to fixed to got float value like this 250.00  */}
                    -${Math.abs(card.expense).toFixed(2)}
                  </p>
                </div>
              </div>
            ))}
            {/* end transiction */}
          </div>
        </div>
      </main>
    </>
  );
};

export default Statistic;
