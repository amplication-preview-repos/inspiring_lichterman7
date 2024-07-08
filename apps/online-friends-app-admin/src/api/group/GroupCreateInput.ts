import { GroupMemberCreateNestedManyWithoutGroupsInput } from "./GroupMemberCreateNestedManyWithoutGroupsInput";
import { GroupChatCreateNestedManyWithoutGroupsInput } from "./GroupChatCreateNestedManyWithoutGroupsInput";
import { GroupCallCreateNestedManyWithoutGroupsInput } from "./GroupCallCreateNestedManyWithoutGroupsInput";

export type GroupCreateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  groupMembers?: GroupMemberCreateNestedManyWithoutGroupsInput;
  groupChats?: GroupChatCreateNestedManyWithoutGroupsInput;
  groupCalls?: GroupCallCreateNestedManyWithoutGroupsInput;
};
