const AUTH_TOKEN_KEY = "auth-token";

export const storeAuthToken = (token: string) =>
  localStorage.setItem(AUTH_TOKEN_KEY, token);

export const getAuthToken = () => localStorage.getItem(AUTH_TOKEN_KEY);

export const removeAuthToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
