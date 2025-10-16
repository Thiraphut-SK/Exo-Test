import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { getToken, setToken, clearToken } from "@/lib/auth";

// ✅ mock login API (จำลอง server)
async function mockLogin(email: string, password: string) {
  await new Promise((r) => setTimeout(r, 600));
  if (email === "test@example.com" && password === "password") {
    return { token: "mock_jwt_token_12345" };
  }
  throw new Error("Invalid credentials");
}

// ✅ mock fetch user info (จำลองตรวจสอบ token)
async function mockFetchUser() {
  await new Promise((r) => setTimeout(r, 500));
  const token = getToken();
  if (!token) throw new Error("No token");
  return { name: "John Doe", email: "test@example.com" };
}

export function useAuth() {
  const queryClient = useQueryClient();

  // login state
  const userQuery = useQuery({
    queryKey: ["auth", "user"],
    queryFn: mockFetchUser,
    retry: false,
  });

  // login
  const loginMutation = useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await mockLogin(data.email, data.password);
      setToken(res.token);
      return res;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth", "user"] });
    },
  });

  //logout
  const logout = () => {
    clearToken();
    queryClient.removeQueries({ queryKey: ["auth", "user"] });
  };

  return {
    user: userQuery.data,
    isLoading: userQuery.isLoading,
    isAuthenticated: !!userQuery.data,
    login: loginMutation.mutateAsync,
    isLoggingIn: loginMutation.isPending,
    logout,
  };
}
