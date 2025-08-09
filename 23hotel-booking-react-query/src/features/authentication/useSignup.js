import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { isLoading: isLoadingSignup, mutate: signup } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      signupApi({
        fullName,
        email,
        password,
      }),
    onSuccess: (user) => {
      toast.success("successfully signed up! please verify your account");
    },
    onError: () => toast.error("could not sign up"),
  });

  return { isLoadingSignup, signup };
}
