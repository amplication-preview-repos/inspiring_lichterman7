import { SortOrder } from "../../util/SortOrder";

export type VideoCallOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  callStartedAt?: SortOrder;
  callEndedAt?: SortOrder;
  caller?: SortOrder;
  receiver?: SortOrder;
};
