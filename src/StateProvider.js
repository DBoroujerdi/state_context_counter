import React, { useContext, useReducer } from "react";

const StateContext = React.createContext();

const useStateContext = () => useContext(StateContext);

function reducer(state, action) {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      throw new Error(`Unknown action ${action.type}`);
  }
}

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const incrementCounter = screenName => {
    dispatch({ type: "INC" });
  };

  const decrementCounter = () => {
    dispatch({ type: "DEC" });
  };

  return (
    <StateContext.Provider
      value={{ count: state.count, incrementCounter, decrementCounter }}
    >
      {children}
    </StateContext.Provider>
  );
};

export { StateProvider, StateContext, useStateContext };
