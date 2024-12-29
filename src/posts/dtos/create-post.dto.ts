import { PostType } from '../enums/postType.enum';
import { postStatus } from '../enums/postStatus.enum';
import {
	Matches,
	IsEnum,
	IsString,
	IsNotEmpty,
	MinLength,
	IsOptional,
	IsJSON,
	IsUrl,
	IsISO8601,
	IsArray,
	ValidateNested,
} from 'class-validator';
import {Type} from 'class-transformer'
import { CreatePostMetaOptionDto } from './create-post-meta-optoin.dto';
export class CreatePostDto {
	@IsString()
	@MinLength(4)
	@IsNotEmpty()
	title: string;

	@IsEnum(PostType)
	@IsNotEmpty()
	postType: PostType;

	@IsString()
	@IsNotEmpty()
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message:
			'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
	})
	slug: string;

	@IsEnum(postStatus)
	@IsNotEmpty()
	status: postStatus;

	@IsString()
	@IsOptional()
	content?: string;

	@IsOptional()
	@IsJSON()
	schema?: string;

	@IsOptional()
	@IsUrl()
	featuredImageUrl?: string;

	@IsISO8601()
	@IsOptional()
	publishOn?: Date;

	@IsOptional()
	@IsArray()
	//each value of string is length is 3 or not
	@MinLength(3, { each: true })
	// here is string check each array value is string or not
	@IsString({ each: true })
	tags?: string[];

	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CreatePostMetaOptionDto)
	metaOptions?: CreatePostMetaOptionDto[];
}
