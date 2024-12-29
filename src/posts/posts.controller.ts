import { Controller, Post, Get, Param, Body } from '@nestjs/common';
import { PostsService } from './provider/posts.service';
import {ApiTags} from '@nestjs/swagger';
import { CreatePostDto } from './dtos/create-post.dto';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
	constructor(private readonly PostsService: PostsService) {}

	@Get(':userId?')
	public getPostByUserId(@Param('userId') userId: string) {
		return this.PostsService.getAllPosts(userId);
	}

	@Post()
	public createPost(@Body() createPostDto: CreatePostDto) {
		console.log(createPostDto);
		return "Post Created"
	}
}
