import * as graphql from "@nestjs/graphql";
import { GroupCallResolverBase } from "./base/groupCall.resolver.base";
import { GroupCall } from "./base/GroupCall";
import { GroupCallService } from "./groupCall.service";

@graphql.Resolver(() => GroupCall)
export class GroupCallResolver extends GroupCallResolverBase {
  constructor(protected readonly service: GroupCallService) {
    super(service);
  }
}
