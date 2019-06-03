import { User } from '../users/interfaces/user.interface';

export interface UserToken {
  user: User;
  token: string;
}
