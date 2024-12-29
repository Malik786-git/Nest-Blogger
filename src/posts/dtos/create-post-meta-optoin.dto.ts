import { IsString, IsNotEmpty } from 'class-validator';
export class CreatePostMetaOptionDto {
	@IsString()
	@IsNotEmpty()
	key: string;

	@IsNotEmpty()
	value: any;
}
