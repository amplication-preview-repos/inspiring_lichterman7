import { SortOrder } from "../../util/SortOrder";

export type GroupChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  sender?: SortOrder;
  groupId?: SortOrder;
};
