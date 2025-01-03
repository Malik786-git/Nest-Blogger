import { ApiProperty, PartialType } from '@nestjs/swagger';
// import { PartialType } from '@nestjs/mapped-types';
import { IsInt, IsNotEmpty } from 'class-validator';
import { CreatePostDto } from './create-post.dto';

// Partial type we import from nestjs/mapped-types which help to inherit properties as we seen below patchPostDto have all property of CreatePostDto along with id.
// but the problem is on swagger we only show id.. so to fixed this we import Partial Type from nest/swagger instead of nestjs/mapped-types.

export class PatchPostDto extends PartialType(CreatePostDto) {
	@ApiProperty({
		example: '1',
		description: 'Post id that need to be updated',
	})
	@IsNotEmpty()
	@IsInt()
	id: number;

}
