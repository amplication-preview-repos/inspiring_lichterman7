/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  GroupCall as PrismaGroupCall,
  Group as PrismaGroup,
} from "@prisma/client";

export class GroupCallServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.GroupCallCountArgs, "select">
  ): Promise<number> {
    return this.prisma.groupCall.count(args);
  }

  async groupCalls(
    args: Prisma.GroupCallFindManyArgs
  ): Promise<PrismaGroupCall[]> {
    return this.prisma.groupCall.findMany(args);
  }
  async groupCall(
    args: Prisma.GroupCallFindUniqueArgs
  ): Promise<PrismaGroupCall | null> {
    return this.prisma.groupCall.findUnique(args);
  }
  async createGroupCall(
    args: Prisma.GroupCallCreateArgs
  ): Promise<PrismaGroupCall> {
    return this.prisma.groupCall.create(args);
  }
  async updateGroupCall(
    args: Prisma.GroupCallUpdateArgs
  ): Promise<PrismaGroupCall> {
    return this.prisma.groupCall.update(args);
  }
  async deleteGroupCall(
    args: Prisma.GroupCallDeleteArgs
  ): Promise<PrismaGroupCall> {
    return this.prisma.groupCall.delete(args);
  }

  async getGroup(parentId: string): Promise<PrismaGroup | null> {
    return this.prisma.groupCall
      .findUnique({
        where: { id: parentId },
      })
      .group();
  }
}