import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import Splash from "./Components/Splash/splash";
import Onboarding from "./Components/onboarding/onboarding";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Signin from "./Components/sign_in/signin";
import Signup from "./Components/sign_up/signup";
import Statistic from "./Components/Statistic/Statistic";
import Wallet from "./Components/Wallet/Wallet";
import Expense from "./Components/expense/expense";
import Navbar from "./Components/Navbar/Navbar";
import UserProfile from "./Components/UserProfile/UserProfile";
import ResetPassword from "./resetPassword/ResetPassword";
import CreatePassword from "./resetPassword/CreatePassword";
import EmailConfirm from "./resetPassword/EmailConfirm";
import WalletEmail from "./Components/sendwallet/WalletEmail";
import ConfirmWallet from "./Components/sendwallet/ConfrimWallet";
import SuccessfulyWallet from "./Components/sendwallet/SuccsessfulyWallet";
import { createContext } from "react";
import { useAuthContext } from "./hooks/useAuthContext";

export const AppContext = createContext();
function App() {
   const { user } = useAuthContext();

   const location = useLocation();
   const isSplashPage =
      location.pathname === "/" ||
      location.pathname === "/onboarding" ||
      location.pathname === "/signin" ||
      location.pathname === "/signup";

   return (
      <div className="App">
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
            {/* <Route
               path="/Wallet"
               element={user ? <Wallet /> : <Navigate to="/onboarding" />}
            /> */}
            <Route
               path="/UserProfile"
               element={user ? <UserProfile /> : <Navigate to="/onboarding" />}
            />
            <Route
               path="/resetpassword"
               // element={user ? <ResetPassword /> : <Navigate to="/onboarding" />}
               element={<ResetPassword />}
            />
            <Route
               path="/emailconfirm"
               // element={user ? <EmailConfirm /> : <Navigate to="/onboarding" />}
               element={<EmailConfirm />}
            />
            <Route
               path="/createpassword"
               // element={user ? <CreatePassword /> : <Navigate to="/onboarding" />}
               element={<CreatePassword />}
            />
            <Route
               path="/WalletEmail"
               // element={user ? <CreatePassword /> : <Navigate to="/onboarding" />}
               element={<WalletEmail />}
            />
            <Route
               path="/ConfrimWallet"
               // element={user ? <CreatePassword /> : <Navigate to="/onboarding" />}
               element={<ConfirmWallet />}
            />
            <Route
               path="/SuccessfulyWallet"
               // element={user ? <CreatePassword /> : <Navigate to="/onboarding" />}
               element={<SuccessfulyWallet />}
            />
            <Route path="/*" element={<Navigate to="/onboarding" />} />
         </Routes>
         {!isSplashPage && <Navbar />}
      </div>
   );
}

export default App;
