import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { GroupMemberListRelationFilter } from "../groupMember/GroupMemberListRelationFilter";
import { GroupChatListRelationFilter } from "../groupChat/GroupChatListRelationFilter";
import { GroupCallListRelationFilter } from "../groupCall/GroupCallListRelationFilter";

export type GroupWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  createdBy?: StringNullableFilter;
  groupMembers?: GroupMemberListRelationFilter;
  groupChats?: GroupChatListRelationFilter;
  groupCalls?: GroupCallListRelationFilter;
};
