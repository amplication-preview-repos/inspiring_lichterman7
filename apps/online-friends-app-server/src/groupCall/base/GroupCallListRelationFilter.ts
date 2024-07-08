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
import { GroupCallWhereInput } from "./GroupCallWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class GroupCallListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => GroupCallWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupCallWhereInput)
  @IsOptional()
  @Field(() => GroupCallWhereInput, {
    nullable: true,
  })
  every?: GroupCallWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupCallWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupCallWhereInput)
  @IsOptional()
  @Field(() => GroupCallWhereInput, {
    nullable: true,
  })
  some?: GroupCallWhereInput;

  @ApiProperty({
    required: false,
    type: () => GroupCallWhereInput,
  })
  @ValidateNested()
  @Type(() => GroupCallWhereInput)
  @IsOptional()
  @Field(() => GroupCallWhereInput, {
    nullable: true,
  })
  none?: GroupCallWhereInput;
}
export { GroupCallListRelationFilter as GroupCallListRelationFilter };