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
	ValidateNested, MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';
import { CreatePostMetaOptionDto } from './create-post-meta-optoin.dto';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
export class CreatePostDto {
	// api property use to show req body property but only non optional
	@ApiProperty({
		example: 'How start coding',
		description: 'This is the title of new blog post',
	})
	@IsString()
	@MinLength(4)
	@MaxLength(512)
	@IsNotEmpty()
	title: string;

	@ApiProperty({
		enum: PostType,
		description: "Possible value, 'post', 'page', story', 'series'",
	})
	@IsEnum(PostType)
	@IsNotEmpty()
	postType: PostType;

	@ApiProperty({
		example: 'my-blog-post',
		description: "Slug like 'my-url'",
	})
	@IsString()
	@IsNotEmpty()
	@Matches(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, {
		message:
			'A slug should be all small letters and uses only "-" and without spaces. For example "my-url"',
	})
	@MaxLength(256)
	slug: string;

	@ApiProperty({
		enum: postStatus,
		description: "Possible value, 'published', 'review', draft'",
	})
	@IsEnum(postStatus)
	@IsNotEmpty()
	status: postStatus;

	@ApiPropertyOptional({
		example: 'Blog port content',
		description: 'This is for post content',
	})
	@IsString()
	@IsOptional()
	content?: string;

	@ApiPropertyOptional({
		example:
			'{\\r\\n \\"@context\\": \\"https:\\/\\/schema.org\\",\\r\\n \\"@type\\": \\"Person\\" \\r\\n}',
		description:
			'Serialize your JSON object else a validation err will be thrown',
	})
	@IsOptional()
	@IsJSON()
	schema?: string;

	@ApiPropertyOptional({
		example: 'http://localhost.com/images/img1.jpg',
		description: 'Image for blog post',
	})
	@IsOptional()
	@IsUrl()
	@MaxLength(1024)
	featuredImageUrl?: string;

	@ApiPropertyOptional({
		example: '2024-03-16T08:45:32+0000',
		description: 'Date of blog post published',
	})
	@IsISO8601()
	@IsOptional()
	publishOn?: Date;

	@ApiPropertyOptional({
		example: ['nestjs', 'code'],
		description: 'array of suitable posts tags',
	})
	@IsOptional()
	@IsArray()
	//each value of string is length is 3 or not
	@MinLength(3, { each: true })
	// here is string check each array value is string or not
	@IsString({ each: true })
	tags?: string[];

	@ApiPropertyOptional({
		type: 'array',
		required: false,
		items: {
			type: 'object',
			properties: {
				key: {
					type: 'string',
					description:
						'the key can be any string identifier for your meta option',
					example: 'sidebarEnabled',
				},
				value: {
					type: 'any',
					description: 'Any value that you want to save to the key',
					example: true,
				},
			},
		},
	})
	@IsOptional()
	@IsArray()
	@ValidateNested({ each: true })
	@Type(() => CreatePostMetaOptionDto)
	metaOptions?: CreatePostMetaOptionDto[];
}
