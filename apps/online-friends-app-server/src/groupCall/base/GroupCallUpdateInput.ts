/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsDate, IsOptional, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { GroupWhereUniqueInput } from "../../group/base/GroupWhereUniqueInput";

@InputType()
class GroupCallUpdateInput {
  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  callStartedAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  callEndedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => GroupWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => GroupWhereUniqueInput)
  @IsOptional()
  @Field(() => GroupWhereUniqueInput, {
    nullable: true,
  })
  group?: GroupWhereUniqueInput | null;
}

export { GroupCallUpdateInput as GroupCallUpdateInput };