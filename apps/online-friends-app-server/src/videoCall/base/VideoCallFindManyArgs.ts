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
import { VideoCallWhereInput } from "./VideoCallWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { VideoCallOrderByInput } from "./VideoCallOrderByInput";

@ArgsType()
class VideoCallFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => VideoCallWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => VideoCallWhereInput, { nullable: true })
  @Type(() => VideoCallWhereInput)
  where?: VideoCallWhereInput;

  @ApiProperty({
    required: false,
    type: [VideoCallOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [VideoCallOrderByInput], { nullable: true })
  @Type(() => VideoCallOrderByInput)
  orderBy?: Array<VideoCallOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { VideoCallFindManyArgs as VideoCallFindManyArgs };