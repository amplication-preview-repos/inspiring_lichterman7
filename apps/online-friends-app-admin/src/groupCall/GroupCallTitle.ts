import { GroupCall as TGroupCall } from "../api/groupCall/GroupCall";

export const GROUPCALL_TITLE_FIELD = "id";

export const GroupCallTitle = (record: TGroupCall): string => {
  return record.id?.toString() || String(record.id);
};
