export type User = {
  name: string;
  email: string;
};

const TOKEN_KEY = "exo_token";
const USER_KEY = "exo_user";

// export async function mockLogin(email: string, password: string) {
//   // mock delay
//   await new Promise((r) => setTimeout(r, 500));

//   if (email === "agent@exo.com" && password === "password") {
//     const user = { name: "Support Agent", email };
//     const token = "mocked-token-123456";

//     localStorage.setItem(TOKEN_KEY, token);
//     localStorage.setItem(USER_KEY, JSON.stringify(user));

//     return { token, user };
//   }
//   throw new Error("Invalid credentials");
// }

// export function logout() {
//   localStorage.removeItem(TOKEN_KEY);
//   localStorage.removeItem(USER_KEY);
// }

export function getUser(): User | null {
  const raw = localStorage.getItem(USER_KEY);

  return raw ? JSON.parse(raw) : null;
}

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function isAuthenticated() {
  return !!getToken();
}

export function setToken(token: string) {
  localStorage.setItem(TOKEN_KEY, token);
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
}
