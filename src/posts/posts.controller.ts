import { Controller, Get, Param } from '@nestjs/common';
import { PostsService } from './provider/posts.service';
import {ApiTags} from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostsController {
	constructor(private readonly PostsService: PostsService) {}

	@Get(':userId?')
	public getPostByUserId(@Param('userId') userId: string) {
		return this.PostsService.getAllPosts(userId);
	}
}
