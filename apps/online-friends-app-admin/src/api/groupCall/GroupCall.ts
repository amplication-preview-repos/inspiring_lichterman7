import { Group } from "../group/Group";

export type GroupCall = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  callStartedAt: Date | null;
  callEndedAt: Date | null;
  group?: Group | null;
};
