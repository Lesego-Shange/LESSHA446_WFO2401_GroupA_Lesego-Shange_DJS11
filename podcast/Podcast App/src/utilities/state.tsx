import React, { createContext, useContext, useReducer, ReactNode } from "react";
import { Action, State } from "./types";

// Initial state
const initialState: State = {
  favourites: [],
};

// Create context
export const StateContext = createContext<
  { state: State; dispatch: React.Dispatch<Action> } | undefined
>(undefined);

// Reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: state.favourites.filter((fav) => fav.id !== action.payload),
      };
    default:
      return state;
  }
};

// State provider component
interface StateProviderProps {
  children: ReactNode;
}

export const StateProvider: React.FC<StateProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

// Hook to use state and dispatch
export const useStateValue = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("useStateValue must be used within a StateProvider");
  }
  return context;
};
