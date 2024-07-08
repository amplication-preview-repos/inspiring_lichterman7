import { GroupMember as TGroupMember } from "../api/groupMember/GroupMember";

export const GROUPMEMBER_TITLE_FIELD = "id";

export const GroupMemberTitle = (record: TGroupMember): string => {
  return record.id?.toString() || String(record.id);
};
