import { User } from './user.model';

export interface UserState {
  readonly user: User;
  readonly isLoading: boolean;
  readonly isLoaded: boolean;
}
