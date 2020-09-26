export const enum Role {
  PROGRAM_MANAGER = 'PROGRAM_MANAGER',
  BUDGET_ANALYST = 'BUDGET_ANALYST',
}

export interface RegistrationResponse {
  isRegistered: boolean;
}

export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface LogoutResponse {
  isLoggedOut: boolean;
}

export interface UserResponse {
  username: string;
  role: Role;
  email: string;
}

export interface User extends UserResponse {}
