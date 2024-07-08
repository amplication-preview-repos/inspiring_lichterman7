import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupCallUpdateInput = {
  callStartedAt?: Date | null;
  callEndedAt?: Date | null;
  group?: GroupWhereUniqueInput | null;
};
