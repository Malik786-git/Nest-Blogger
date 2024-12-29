import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiPropertyOptional } from '@nestjs/swagger';
export class GetUserParamsDto {
	@ApiPropertyOptional({ description: 'Get user by id', example: '64' })
	@IsOptional()
	@IsInt()
	@Type(() => Number) // by default number come as a string in params so need to convert it number then validation pipe work coz we define id as a number
	id?: number;
}
