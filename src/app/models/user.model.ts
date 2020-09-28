export interface RegistrationResponse {
  isRegistered: boolean;
}

export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface LogoutResponse {
  isAuth: boolean;
}

export interface UserResponse {
  username: string;
  role: string;
  email: string;
}

export interface User extends UserResponse {}
