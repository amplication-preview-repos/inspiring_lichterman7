import * as graphql from "@nestjs/graphql";
import { FriendResolverBase } from "./base/friend.resolver.base";
import { Friend } from "./base/Friend";
import { FriendService } from "./friend.service";

@graphql.Resolver(() => Friend)
export class FriendResolver extends FriendResolverBase {
  constructor(protected readonly service: FriendService) {
    super(service);
  }
}
