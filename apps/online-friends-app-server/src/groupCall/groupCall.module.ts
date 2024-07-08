import { Module } from "@nestjs/common";
import { GroupCallModuleBase } from "./base/groupCall.module.base";
import { GroupCallService } from "./groupCall.service";
import { GroupCallController } from "./groupCall.controller";
import { GroupCallResolver } from "./groupCall.resolver";

@Module({
  imports: [GroupCallModuleBase],
  controllers: [GroupCallController],
  providers: [GroupCallService, GroupCallResolver],
  exports: [GroupCallService],
})
export class GroupCallModule {}
