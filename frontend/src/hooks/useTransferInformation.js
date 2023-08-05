import { useState } from "react";
import { useTransferContext } from "./useTransferContext";
import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";

const useTransferInformation = () => {
   const navigate = useNavigate();
   const { user } = useAuthContext();

   const [error, setError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);
   const { dispatch } = useTransferContext();

   const informationCheck = async (emailTo, value) => {
      setIsLoading(true);
      setError(null);

      const information = { emailTo, value };

      const response = await fetch("/api/wallet/tranfertoinformation", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user.token}`,
         },
         body: JSON.stringify(information),
      });

      const json = await response.json();

      if (!response.ok) {
         setIsLoading(false);
         setError(json.error);
      }

      if (response.ok) {
         dispatch({
            type: "ADD_TRANSFER_INFO",
            payload: json,
         });
         setIsLoading(false);
         setError(null);
         navigate("/confirmtransfer");
      }
   };
   return { informationCheck, isLoading, error };
};

export default useTransferInformation;
