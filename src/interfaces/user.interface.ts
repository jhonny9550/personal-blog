export type UserRole = "admin" | "guest";

export default interface User {
  id: number;
  email: string;
  name?: string;
  username?: string;
  password: string;
  onboarding: boolean;
  validated: boolean;
  resetToken?: string;
  role: UserRole;

  // timestamps!
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
