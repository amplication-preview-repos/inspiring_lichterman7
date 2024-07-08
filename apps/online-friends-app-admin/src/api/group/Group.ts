import { GroupMember } from "../groupMember/GroupMember";
import { GroupChat } from "../groupChat/GroupChat";
import { GroupCall } from "../groupCall/GroupCall";

export type Group = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  createdBy: string | null;
  groupMembers?: Array<GroupMember>;
  groupChats?: Array<GroupChat>;
  groupCalls?: Array<GroupCall>;
};
