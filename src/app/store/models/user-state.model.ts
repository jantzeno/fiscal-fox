import { User } from '../../models/user.model';

export interface UserState {
  readonly user: User;
  readonly isLoading: boolean;
  readonly errorMessage: string;
}
