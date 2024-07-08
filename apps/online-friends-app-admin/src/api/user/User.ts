import { JsonValue } from "type-fest";
import { Friend } from "../friend/Friend";
import { GroupMember } from "../groupMember/GroupMember";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  profilePicture: JsonValue;
  friends?: Array<Friend>;
  groupMembers?: Array<GroupMember>;
};
