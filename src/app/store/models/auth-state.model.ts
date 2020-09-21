export interface AuthState {
  readonly isAuth: boolean;
  readonly token: string;
  readonly isLoading: boolean;
  readonly errorMessage: string;
}
