import { Controller } from '@nestjs/common';
import { PostsService } from './provider/posts.service';

@Controller('posts')
export class PostsController {
	constructor(private readonly PostsService: PostsService) {}
}
