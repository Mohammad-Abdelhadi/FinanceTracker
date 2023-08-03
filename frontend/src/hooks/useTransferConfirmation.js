import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useTransferConfirmation = () => {
   const navigate = useNavigate();
   const { user } = useAuthContext();

   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);

   const ConfirmationSend = async (transferInfo) => {
      setIsLoading(true);
      setError(null);

      const response = await fetch("/api/wallet/confirmtrasfermoney", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
         },
         body: JSON.stringify(transferInfo),
      });

      const json = await response.json();

      if (!response.ok) {
         setIsLoading(false);
         setError(json.error);
      }

      if (response.ok) {
         setIsLoading(false);
         setError(null);
         navigate("/SuccessfulyWallet");
      }
   };
   return { ConfirmationSend, isLoading, error };
};

export default useTransferConfirmation;
