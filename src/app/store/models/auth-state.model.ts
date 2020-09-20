export interface AuthState {
  readonly isAuth: boolean;
  readonly token: string;
  readonly isTokenExpired: boolean;
  readonly isLoading: boolean;
  readonly errorMessage: string;
}
