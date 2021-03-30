import User from "./user.interface";

type ResponseCode = 200 | 400 | 401 | 404 | 500;

export interface DefaultAPIResponse {
  code: ResponseCode;
  success: boolean;
  message: string;
}

export interface QueryUser extends DefaultAPIResponse {
  user: User;
}

export interface LoginResponse extends DefaultAPIResponse {
  user: User;
  token: string;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
}
