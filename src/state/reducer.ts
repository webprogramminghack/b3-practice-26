const initialState = {
  count: 0,
};

type ActionType = {
  type: "increment" | "decrement";
};

function counterReducer(state: typeof initialState, action: ActionType) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export { counterReducer, initialState };
