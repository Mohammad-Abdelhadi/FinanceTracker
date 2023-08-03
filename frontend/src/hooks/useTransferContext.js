import { useContext } from "react";
import { TransferContext } from "../context/TranferContext";

export const useTransferContext = () => {
   const tranfer = useContext(TransferContext);

   if (!tranfer) {
      throw Error(
         "Use tranfer Context must be used inside tranfer context provider"
      );
   }

   return tranfer;
};
