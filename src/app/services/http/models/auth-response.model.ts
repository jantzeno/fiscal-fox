export interface RegistrationResponse {
  isRegistered: boolean;
}

export interface AuthResponse {
  token: string;
}

export interface LogoutResponse {
  isAuth: boolean;
}
