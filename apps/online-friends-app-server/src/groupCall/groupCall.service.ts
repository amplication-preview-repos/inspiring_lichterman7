import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { GroupCallServiceBase } from "./base/groupCall.service.base";

@Injectable()
export class GroupCallService extends GroupCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
