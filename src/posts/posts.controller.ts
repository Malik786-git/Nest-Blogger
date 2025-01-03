import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { PostsService } from './provider/posts.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';
import { PatchPostDto } from './dtos/patch-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
	constructor(private readonly PostsService: PostsService) {}

	@Get(':userId?')
	public getPostByUserId(@Param('userId') userId: string) {
		return this.PostsService.getAllPosts(userId);
	}

	@ApiOperation({
		summary: 'Create New Blog Post',
	})
	@ApiResponse({
		status: 200,
		description: 'Successfully posted post',
	})
	@Post()
	public createPost(@Body() createPostDto: CreatePostDto) {
		console.log(createPostDto);
		return "Post Created"
	}

	@Patch()
	public  updatePost(@Body() patchPostDto:PatchPostDto){
			console.log(patchPostDto);
	}
}
