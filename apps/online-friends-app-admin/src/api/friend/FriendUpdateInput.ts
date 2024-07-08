import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FriendUpdateManyWithoutFriendsInput } from "./FriendUpdateManyWithoutFriendsInput";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";

export type FriendUpdateInput = {
  user?: UserWhereUniqueInput | null;
  friends?: FriendUpdateManyWithoutFriendsInput;
  friend?: FriendWhereUniqueInput | null;
};
