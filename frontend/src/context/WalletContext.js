import { createContext, useReducer } from "react";

export const WalletContext = createContext();

export const WalletReducer = (state, action) => {
   switch (action.type) {
      case "SET_WALLET":
         return {
            wallet: action.payload,
         };
      default:
         return state;
   }
};

export const WalletContextProvider = ({ children }) => {
   const [state, dispatch] = useReducer(WalletReducer, {
      wallet: null,
   });
   console.log("Wallet State", state);

   return (
      <WalletContext.Provider value={{ ...state, dispatch }}>
         {children}
      </WalletContext.Provider>
   );
};
