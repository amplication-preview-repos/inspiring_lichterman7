import { Module } from "@nestjs/common";
import { FriendModuleBase } from "./base/friend.module.base";
import { FriendService } from "./friend.service";
import { FriendController } from "./friend.controller";
import { FriendResolver } from "./friend.resolver";

@Module({
  imports: [FriendModuleBase],
  controllers: [FriendController],
  providers: [FriendService, FriendResolver],
  exports: [FriendService],
})
export class FriendModule {}
