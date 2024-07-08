import { SortOrder } from "../../util/SortOrder";

export type GroupCallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  callStartedAt?: SortOrder;
  callEndedAt?: SortOrder;
  groupId?: SortOrder;
};
