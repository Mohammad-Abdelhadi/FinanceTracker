import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Splash from "./Components/Splash/splash";
import Onboarding from "./Components/onboarding/onboarding";
import {
   Routes,
   Route,
   useLocation,
   BrowserRouter,
   Navigate,
} from "react-router-dom";
import Home from "./Components/Home/Home";
import Signin from "./Components/sign_in/signin";
import Signup from "./Components/sign_up/signup";
import Statistic from "./Components/Statistic/Statistic";
import Wallet from "./Components/Wallet/Wallet";
import Expense from "./Components/expense/expense";
import Navbar from "./Components/Navbar/Navbar";
import UserProfile from "./Components/UserProfile/UserProfile";
import { useState, createContext, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./Components/expense/config/firebase";
import { useAuthContext } from "./hooks/useAuthContext";

export const AppContext = createContext();
function App() {
   const { user } = useAuthContext();

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
   //    getCategoriesList();
   //    console.log(categoriesList);
   // }, []);
   // // Check if the current route is the selected pages
   // const isSplashPage =
   //    location.pathname === "/" ||
   //    location.pathname === "/onboarding" ||
   //    location.pathname === "/signin" ||
   //    location.pathname === "/signup";

   return (
      <div className="App">
         {/* <AppContext.Provider value={{ categoriesList, getCategoriesList }}> */}
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Splash />} />

               <Route
                  path="/onboarding"
                  element={!user ? <Onboarding /> : <Navigate to="/Homepage" />}
               />
               <Route
                  path="/signin"
                  element={!user ? <Signin /> : <Navigate to="/HomePage" />}
               />
               <Route
                  path="/signup"
                  element={!user ? <Signup /> : <Navigate to="/HomePage" />}
               />
               <Route
                  path="/HomePage"
                  element={user ? <Home /> : <Navigate to="/onboarding" />}
               />
               <Route
                  path="/expense"
                  element={user ? <Expense /> : <Navigate to="/onboarding" />}
               />
               <Route
                  path="/statistic"
                  element={user ? <Statistic /> : <Navigate to="/onboarding" />}
               />
               <Route
                  path="/Wallet"
                  element={user ? <Wallet /> : <Navigate to="/onboarding" />}
               />
               <Route
                  path="/UserProfile"
                  element={
                     user ? <UserProfile /> : <Navigate to="/onboarding" />
                  }
               />
            </Routes>
         </BrowserRouter>
         {/* {!isSplashPage && <Navbar />} */}
         {/* </AppContext.Provider> */}
      </div>
   );
}

export default App;
