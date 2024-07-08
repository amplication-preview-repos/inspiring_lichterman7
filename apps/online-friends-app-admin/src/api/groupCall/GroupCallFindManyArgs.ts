import { GroupCallWhereInput } from "./GroupCallWhereInput";
import { GroupCallOrderByInput } from "./GroupCallOrderByInput";

export type GroupCallFindManyArgs = {
  where?: GroupCallWhereInput;
  orderBy?: Array<GroupCallOrderByInput>;
  skip?: number;
  take?: number;
};
