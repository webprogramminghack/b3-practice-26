import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTodo } from "../../../services/todo/services";
const useDeleteTodo = () => {
  const queryClient = useQueryClient();

  const deleteTodoMutation = useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
      alert("data berhasil dihapus");
      location.href = "/";
    },
    onError: () => {
      alert("data gagal dihapus");
      location.reload();
    },
  });
  return { deleteTodoMutation };
};

export default useDeleteTodo;
