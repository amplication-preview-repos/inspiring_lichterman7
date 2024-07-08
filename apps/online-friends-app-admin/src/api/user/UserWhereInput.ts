import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { FriendListRelationFilter } from "../friend/FriendListRelationFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  profilePicture?: JsonFilter;
  friends?: FriendListRelationFilter;
  groupMembers?: GroupMemberListRelationFilter;
};
