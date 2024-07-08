import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FriendCreateNestedManyWithoutFriendsInput } from "./FriendCreateNestedManyWithoutFriendsInput";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";

export type FriendCreateInput = {
  user?: UserWhereUniqueInput | null;
  friends?: FriendCreateNestedManyWithoutFriendsInput;
  friend?: FriendWhereUniqueInput | null;
};
