import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupCallCreateInput = {
  callStartedAt?: Date | null;
  callEndedAt?: Date | null;
  group?: GroupWhereUniqueInput | null;
};
