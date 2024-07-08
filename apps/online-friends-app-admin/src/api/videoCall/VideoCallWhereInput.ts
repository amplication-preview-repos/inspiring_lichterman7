import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VideoCallWhereInput = {
  id?: StringFilter;
  callStartedAt?: DateTimeNullableFilter;
  callEndedAt?: DateTimeNullableFilter;
  caller?: StringNullableFilter;
  receiver?: StringNullableFilter;
};
