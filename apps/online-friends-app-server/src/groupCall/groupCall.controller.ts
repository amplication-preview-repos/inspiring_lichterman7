import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { GroupCallService } from "./groupCall.service";
import { GroupCallControllerBase } from "./base/groupCall.controller.base";

@swagger.ApiTags("groupCalls")
@common.Controller("groupCalls")
export class GroupCallController extends GroupCallControllerBase {
  constructor(protected readonly service: GroupCallService) {
    super(service);
  }
}
