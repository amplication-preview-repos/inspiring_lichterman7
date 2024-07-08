import { SortOrder } from "../../util/SortOrder";

export type ChatOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  message?: SortOrder;
  timestamp?: SortOrder;
  sender?: SortOrder;
  receiver?: SortOrder;
};
