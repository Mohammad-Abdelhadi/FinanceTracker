import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const useAuthContext = () => {
   const context = useContext(AuthContext);
   if (!context) {
      throw Error(
         "Use Authentication Context must be used inside authentication context provider"
      );
   }
   return context;
};
