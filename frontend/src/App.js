import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Splash from "./Components/Splash/splash";
import Onboarding from "./Components/onboarding/onboarding";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signin from "./Components/sign_in/signin";
import Signup from "./Components/sign_up/signup";
import Statistic from "./Components/Statistic/Statistic";
import Wallet from "./Components/Wallet/Wallet";
import Expense from "./Components/expense/expense";
import Navbar from "./Components/Navbar/Navbar";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useState, createContext } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Components/expense/config/firebase";

export const AppContext = createContext();
function App() {
   // let index = localStorage.getItem("index");
   // let emailId = JSON.parse(localStorage.getItem("gmail"));
   // let email = emailId[index];
   // const location = useLocation();
   // const [categoriesList, setCategoriesList] = useState([]);
   // const expenseCollectionRef = collection(db, email);
   // const getCategoriesList = async () => {
   //    const data = await getDocs(expenseCollectionRef);
   //    const filterData = data.docs.map((doc) => ({
   //       ...doc.data(),
   //       id: doc.id,
   //    }));
   //    setCategoriesList(filterData);
   // };
   // useEffect(() => {
   //   getCategoriesList();
   //   console.log(categoriesList)
   // }, []);
   // Check if the current route is the selected pages
   // const isSplashPage =
   //    location.pathname === "/" ||
   //    location.pathname === "/onboarding" ||
   //    location.pathname === "/signin" ||
   //    location.pathname === "/signup";

   return (
      <div className="App">
         {/* <AppContext.Provider value={{ categoriesList, getCategoriesList }}> */}
         <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/HomePage" element={<Home />} />
            <Route path="/expense" element={<Expense />} />
            <Route path="/statistic" element={<Statistic />} />
            <Route path="/Wallet" element={<Wallet />} />
            <Route path="/UserProfile" element={<UserProfile />} />
         </Routes>
         {/* {!isSplashPage && <Navbar />} */}
         {/* </AppContext.Provider> */}
      </div>
   );
}

export default App;
