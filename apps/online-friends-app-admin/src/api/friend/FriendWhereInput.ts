import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FriendListRelationFilter } from "./FriendListRelationFilter";
import { FriendWhereUniqueInput } from "./FriendWhereUniqueInput";

export type FriendWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
  friends?: FriendListRelationFilter;
  friend?: FriendWhereUniqueInput;
};
