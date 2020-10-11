export interface AuthState {
  readonly isAuth: boolean;
  readonly isRegistered: boolean;
  readonly token: string;
  readonly isLoading: boolean;
}
