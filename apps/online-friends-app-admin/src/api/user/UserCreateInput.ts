import { InputJsonValue } from "../../types";
import { FriendCreateNestedManyWithoutUsersInput } from "./FriendCreateNestedManyWithoutUsersInput";
import { GroupMemberCreateNestedManyWithoutUsersInput } from "./GroupMemberCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  profilePicture?: InputJsonValue;
  friends?: FriendCreateNestedManyWithoutUsersInput;
  groupMembers?: GroupMemberCreateNestedManyWithoutUsersInput;
};
