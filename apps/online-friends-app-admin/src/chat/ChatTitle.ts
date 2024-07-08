import { Chat as TChat } from "../api/chat/Chat";

export const CHAT_TITLE_FIELD = "sender";

export const ChatTitle = (record: TChat): string => {
  return record.sender?.toString() || String(record.id);
};
