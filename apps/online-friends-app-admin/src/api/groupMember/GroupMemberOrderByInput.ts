import { SortOrder } from "../../util/SortOrder";

export type GroupMemberOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  groupId?: SortOrder;
  userId?: SortOrder;
};
