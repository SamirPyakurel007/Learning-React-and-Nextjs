import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { isLoading: isLoadingLogout, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      toast.success("Successfully logged out");
      navigate("/login", { replace: true });
      queryClient.removeQueries();
    },
    onError: () => toast.error("loggout failed"),
  });

  return { isLoadingLogout, logout };
}

export default useLogout;
