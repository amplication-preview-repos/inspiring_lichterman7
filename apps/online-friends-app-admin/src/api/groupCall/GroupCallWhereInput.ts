import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";

export type GroupCallWhereInput = {
  id?: StringFilter;
  callStartedAt?: DateTimeNullableFilter;
  callEndedAt?: DateTimeNullableFilter;
  group?: GroupWhereUniqueInput;
};
