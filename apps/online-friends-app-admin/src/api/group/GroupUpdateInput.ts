import { GroupMemberUpdateManyWithoutGroupsInput } from "./GroupMemberUpdateManyWithoutGroupsInput";
import { GroupChatUpdateManyWithoutGroupsInput } from "./GroupChatUpdateManyWithoutGroupsInput";
import { GroupCallUpdateManyWithoutGroupsInput } from "./GroupCallUpdateManyWithoutGroupsInput";

export type GroupUpdateInput = {
  name?: string | null;
  description?: string | null;
  createdBy?: string | null;
  groupMembers?: GroupMemberUpdateManyWithoutGroupsInput;
  groupChats?: GroupChatUpdateManyWithoutGroupsInput;
  groupCalls?: GroupCallUpdateManyWithoutGroupsInput;
};
