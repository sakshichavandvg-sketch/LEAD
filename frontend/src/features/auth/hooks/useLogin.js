import { useMutation } from "@tanstack/react-query";
import authService from "../services/authService";

export default function useLogin() {
  return useMutation({
    mutationFn: authService.login,

    onSuccess: (data) => {
      console.log("Login Success", data);
    },

    onError: (error) => {
      console.error("Login Failed", error);
    },
  });
}