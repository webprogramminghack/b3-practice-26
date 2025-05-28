import { useContext } from "react";
import UserContext from "../../../context/createContext";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GrandParentComponent = () => {
  return (
    <div>
      GrandParentComponent
      <ParentComponent />
    </div>
  );
};
const ParentComponent = () => {
  return (
    <div>
      ParentComponent
      <ChildComponent />
    </div>
  );
};
const ChildComponent = () => {
  return (
    <div>
      ChildComponent
      <GrandChildComponent />
    </div>
  );
};
const GrandChildComponent = () => {
  const context = useContext(UserContext);
  if (!context) {
    return <div>no context</div>;
  }
  const { user, setUser } = context;

  return (
    <div>
      <p>user: {user}</p>
      <button onClick={() => setUser("dicky")}>change</button>
    </div>
  );
};

const UseContextScreen = () => {
  // env access
  console.log(import.meta.env.VITE_BASE_API_KEY);
  return (
    <>
      <GrandChildComponent />
    </>
  );
};

export default UseContextScreen;
