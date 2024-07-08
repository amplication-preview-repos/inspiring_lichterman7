import { User } from "../user/User";

export type Friend = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  user?: User | null;
  friends?: Array<Friend>;
  friend?: Friend | null;
};
