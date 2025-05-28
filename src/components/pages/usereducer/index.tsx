import React, { useReducer } from "react";
import { counterReducer, initialState } from "../../../state/reducer";

const UseReducerScreen: React.FC = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div>
      <p>counter: {state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch({ type: "decrement" })}>
          decrement
        </button>
        <button onClick={() => dispatch({ type: "increment" })}>
          increment
        </button>
      </div>
    </div>
  );
};

export default UseReducerScreen;
