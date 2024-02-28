import { createContext, useContext, useReducer } from "react";

export const Context = createContext();

export const ContextProvider = ({ reducer, intialState, children }) => {
  return (
    <Context.Provider value={useReducer(reducer, intialState)}>
      {children}
    </Context.Provider>
  );
};

export const useContextValue = () => useContext(Context);
