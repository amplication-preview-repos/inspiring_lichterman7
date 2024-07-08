import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupChatCreateInput = {
  message?: string | null;
  timestamp?: Date | null;
  sender?: string | null;
  group?: GroupWhereUniqueInput | null;
};
