import { StringFilter } from "../../util/StringFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type GroupMemberWhereInput = {
  id?: StringFilter;
  group?: GroupWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
