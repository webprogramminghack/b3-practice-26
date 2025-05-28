import type { MutationFunction, QueryFunction } from "@tanstack/react-query";
import { api } from "../api";
import { todoEndpoints } from "./endpoints";
import type { Todo } from "../../types/todo.types";

type TodoQueryKey = [string, string, { completed: boolean; limit: number }];

type TodosQueryKey = [
  string,
  { completed: boolean; page: number; limit: number }
];

type TodosResponse = {
  todos: Todo[];
  nextCursor: number | null;
  totalTodos: number;
  hasNextPage: boolean;
};

const getScrollTodos: QueryFunction<TodosResponse, TodoQueryKey> = async ({
  queryKey,
  pageParam = 0,
  signal,
}) => {
  const [path, subpath, { completed, limit }] = queryKey;

  const response = await api.get(`${path}/${subpath}`, {
    params: {
      completed,
      limit,
      page: pageParam,
    },
    signal,
  });
  return response.data;
};

const getTodos: QueryFunction<TodosResponse, TodosQueryKey> = async ({
  queryKey,
  signal,
}) => {
  const [path, { completed, page = 1, limit = 10 }] = queryKey;

  const response = await api.get(`${path}`, {
    params: {
      completed,
      page,
      limit,
    },
    signal,
  });
  return response.data;
};

const createTodo: MutationFunction = async (todo) => {
  const response = await api.post(todoEndpoints.todo, todo);
  return response.data;
};
const updateTodo: MutationFunction<Todo | void, Todo> = async (todo: Todo) => {
  const response = await api.put(`${todoEndpoints.todo}/${todo.id}`, todo);
  return response.data;
};

const deleteTodo: MutationFunction = async (id) => {
  const response = await api.delete(`${todoEndpoints.todo}/${id}`);
  return response.data;
};

export { getTodos, getScrollTodos, createTodo, updateTodo, deleteTodo };
