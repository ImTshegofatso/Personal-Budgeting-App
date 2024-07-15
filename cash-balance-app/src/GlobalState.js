import React, { useReducer } from 'react';

// Initial state for the reducer
const initialState = { balance: 0 };

// Reducer function to update state based on dispatched actions
const reducer = (state, action) => {
  switch (action.type) {
    case 'DEPOSIT':
      return { ...state, balance: state.balance + action.amount };
    case 'WITHDRAW':
      return { ...state, balance: state.balance - action.amount };
    case 'ADD_INTEREST':
      return { ...state, balance: state.balance * 1.05 };
    case 'CHARGES':
      return { ...state, balance: state.balance * 0.85 };
    default:
      return state;
  }
};

// Create context object
export const GlobalContext = React.createContext();

// Global provider component to wrap the application and provide state and dispatch function
export const GlobalProvider = ({ children }) => {
  // useReducer hook to manage state and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Provide state and dispatch function to children using context
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
