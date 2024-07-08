/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { GroupChat } from "./GroupChat";
import { GroupChatCountArgs } from "./GroupChatCountArgs";
import { GroupChatFindManyArgs } from "./GroupChatFindManyArgs";
import { GroupChatFindUniqueArgs } from "./GroupChatFindUniqueArgs";
import { CreateGroupChatArgs } from "./CreateGroupChatArgs";
import { UpdateGroupChatArgs } from "./UpdateGroupChatArgs";
import { DeleteGroupChatArgs } from "./DeleteGroupChatArgs";
import { Group } from "../../group/base/Group";
import { GroupChatService } from "../groupChat.service";
@graphql.Resolver(() => GroupChat)
export class GroupChatResolverBase {
  constructor(protected readonly service: GroupChatService) {}

  async _groupChatsMeta(
    @graphql.Args() args: GroupChatCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [GroupChat])
  async groupChats(
    @graphql.Args() args: GroupChatFindManyArgs
  ): Promise<GroupChat[]> {
    return this.service.groupChats(args);
  }

  @graphql.Query(() => GroupChat, { nullable: true })
  async groupChat(
    @graphql.Args() args: GroupChatFindUniqueArgs
  ): Promise<GroupChat | null> {
    const result = await this.service.groupChat(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => GroupChat)
  async createGroupChat(
    @graphql.Args() args: CreateGroupChatArgs
  ): Promise<GroupChat> {
    return await this.service.createGroupChat({
      ...args,
      data: {
        ...args.data,

        group: args.data.group
          ? {
              connect: args.data.group,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => GroupChat)
  async updateGroupChat(
    @graphql.Args() args: UpdateGroupChatArgs
  ): Promise<GroupChat | null> {
    try {
      return await this.service.updateGroupChat({
        ...args,
        data: {
          ...args.data,

          group: args.data.group
            ? {
                connect: args.data.group,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => GroupChat)
  async deleteGroupChat(
    @graphql.Args() args: DeleteGroupChatArgs
  ): Promise<GroupChat | null> {
    try {
      return await this.service.deleteGroupChat(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Group, {
    nullable: true,
    name: "group",
  })
  async getGroup(@graphql.Parent() parent: GroupChat): Promise<Group | null> {
    const result = await this.service.getGroup(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}