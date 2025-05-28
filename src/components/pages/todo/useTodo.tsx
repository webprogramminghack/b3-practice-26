import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../../../services/todo/services";
import type { Todo } from "../../../types/todo.types";

type UseGetTodosParams = {
  completed: boolean;
  page: number;
  limit: number;
};
type UseGetTodosReturn = {
  data: Todo[];
  totalTodos: number;
  hasNextPage: boolean;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  error: Error | null;
};

const useTodo = ({
  completed,
  page,
  limit,
}: UseGetTodosParams): UseGetTodosReturn => {
  const { data, isLoading, isFetching, isError, error } = useQuery({
    queryKey: ["todos", { completed, page, limit }],
    queryFn: getTodos,
  });

  const todos = data?.todos || [];
  const totalTodos = data?.totalTodos || 0;
  const hasNextPage = data?.hasNextPage || false;

  return {
    data: todos,
    totalTodos,
    hasNextPage,
    isLoading,
    isFetching,
    isError,
    error,
  };
};

export default useTodo;
