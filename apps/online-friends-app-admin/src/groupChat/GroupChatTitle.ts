import { GroupChat as TGroupChat } from "../api/groupChat/GroupChat";

export const GROUPCHAT_TITLE_FIELD = "sender";

export const GroupChatTitle = (record: TGroupChat): string => {
  return record.sender?.toString() || String(record.id);
};
