import { SortOrder } from "../../util/SortOrder";

export type FriendOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
  friendId?: SortOrder;
};
