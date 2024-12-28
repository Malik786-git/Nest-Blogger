import { Injectable } from '@nestjs/common';
import { UserService } from '../../users/providers/user.service';

@Injectable()
export class PostsService {
	constructor(
		// injecting user service
		private readonly UserService: UserService,
	) {}
	public getAllPosts(userId: string) {
		console.log(userId);
		let user = this.UserService.findOneUser(userId);
		return [
			{
				user,
				title: 'test post',
				content: 'test post content',
			},
			{
				user,
				title: 'test post 2',
				content: 'test post content 2',
			},
		];
	}
}
