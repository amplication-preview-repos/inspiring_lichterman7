import { Group } from "../group/Group";
import { User } from "../user/User";

export type GroupMember = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  group?: Group | null;
  user?: User | null;
};
