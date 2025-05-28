import React from "react";
import useTodo from "./useTodo";

const TodoAppScreen: React.FC = () => {
  const { data } = useTodo({
    completed: false,
    page: 1,
    limit: 10,
  });

  console.log(data);
  return <div>TodoAppScreen</div>;
};

export default TodoAppScreen;
