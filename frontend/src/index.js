import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";
import { WalletContextProvider } from "./context/WalletContext";
import { TransferContextProvider } from "./context/TranferContext";
// import Home from "./Components/Home"
// import Signup from './Components/Signup';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <AuthContextProvider>
         <BrowserRouter>
            <WalletContextProvider>
               <TransferContextProvider>
                  <App />
               </TransferContextProvider>
            </WalletContextProvider>
         </BrowserRouter>
      </AuthContextProvider>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
