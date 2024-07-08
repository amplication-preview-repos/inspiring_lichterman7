/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { GroupCallWhereUniqueInput } from "./GroupCallWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class GroupCallFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => GroupCallWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupCallWhereUniqueInput)
  @Field(() => GroupCallWhereUniqueInput, { nullable: false })
  where!: GroupCallWhereUniqueInput;
}

export { GroupCallFindUniqueArgs as GroupCallFindUniqueArgs };