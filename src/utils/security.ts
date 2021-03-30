import jwtDecode from "jwt-decode";
import User from "../interfaces/user.interface";
import { getAuthToken } from "./storage";

export const getAuthHeader = () => {
  const token = getAuthToken();
  if (!token) return null;
  return `Bearer ${token}`;
};

export const decodeAuthToken = () => {
  const token = getAuthToken();
  if (!token) return null;
  return jwtDecode(token) as User;
};
