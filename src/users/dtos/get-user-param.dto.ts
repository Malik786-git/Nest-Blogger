import { IsInt, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetUserParamsDto {
	@IsOptional()
	@IsInt()
	@Type(() => Number) // by default number come as a string in params so need to convert it number then validation pipe work coz we define id as a number
	id?: number;
}
