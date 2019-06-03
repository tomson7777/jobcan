import { Role } from '../../shared/role.enum';

export interface User {
  id: number;
  firstName: string;
  email: string;
  role: Role;
  company: string;
}
