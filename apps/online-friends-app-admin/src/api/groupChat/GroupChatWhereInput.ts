import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupChatWhereInput = {
  id?: StringFilter;
  message?: StringNullableFilter;
  timestamp?: DateTimeNullableFilter;
  sender?: StringNullableFilter;
  group?: GroupWhereUniqueInput;
};
