import { Group } from "../group/Group";

export type GroupChat = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  message: string | null;
  timestamp: Date | null;
  sender: string | null;
  group?: Group | null;
};
