export const enum Role {
  PROGRAM_MANAGER = 'PROGRAM_MANAGER',
  BUDGET_ANALYST = 'BUDGET_ANALYST',
}

export interface AuthResponse {
  user: UserResponse;
  token: string;
}

export interface UserResponse {
  username: string;
  password?: string;
  role: Role;
  email: string;
}

export interface User extends UserResponse {}
