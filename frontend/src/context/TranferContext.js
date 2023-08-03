import { createContext, useReducer } from "react";

export const TransferContext = createContext();

const transferReducer = (state, action) => {
   switch (action.type) {
      case "ADD_TRANSFER_INFO":
         return { transferInfo: action.payload };
      case "DELETE_TRANSFER_INFO":
         return { transferInfo: action.payload };

      default:
         return state;
   }
};

export const TransferContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(transferReducer, {
      transferInfo: null,
   });
   console.log("transfer State", state);

   return (
      <TransferContext.Provider value={{ ...state, dispatch }}>
         {children}
      </TransferContext.Provider>
   );
};
