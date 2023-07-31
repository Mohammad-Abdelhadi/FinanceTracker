import { useContext } from "react";
import { WalletContext } from "../context/WalletContext";

export const useWalletContext = () => {
   const context = useContext(WalletContext);

   if (!context) {
      throw Error(
         "Use Wallet Context must be used inside Wallet context provider"
      );
   }

   return context;
};
