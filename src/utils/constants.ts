import { UserRole } from "../interfaces/user.interface";

export const USER_ROLES: Record<"ADMIN" | "GUEST", UserRole> = {
  ADMIN: "admin",
  GUEST: "guest",
};
