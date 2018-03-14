import { User } from './user';
export class Product {
  id?: string;
  name?: string;
  number?: number;
  team?: string;
  count?: number;
  userId?: string;
  userName?: string;
  created_at: Date = new Date();
}
