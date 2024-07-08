import { Friend as TFriend } from "../api/friend/Friend";

export const FRIEND_TITLE_FIELD = "id";

export const FriendTitle = (record: TFriend): string => {
  return record.id?.toString() || String(record.id);
};
