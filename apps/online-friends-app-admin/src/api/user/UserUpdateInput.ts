import { InputJsonValue } from "../../types";
import { FriendUpdateManyWithoutUsersInput } from "./FriendUpdateManyWithoutUsersInput";
import { GroupMemberUpdateManyWithoutUsersInput } from "./GroupMemberUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  profilePicture?: InputJsonValue;
  friends?: FriendUpdateManyWithoutUsersInput;
  groupMembers?: GroupMemberUpdateManyWithoutUsersInput;
};
