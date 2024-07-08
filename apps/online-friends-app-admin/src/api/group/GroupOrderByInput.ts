import { SortOrder } from "../../util/SortOrder";

export type GroupOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  createdBy?: SortOrder;
};
