import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useSignup() {
  const { mutate: signup, isPending: loading } = useMutation({
    mutationFn: signupApi,
    onSuccess: (user) => {
      console.log(user);
      toast.success("Signed up successfully");
    },
    onError: (error) => {
      console.error(error);
      toast.error("Signup failed");
    },
  });

  return { signup, loading };
}
