import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberCreateInput = {
  group?: GroupWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
