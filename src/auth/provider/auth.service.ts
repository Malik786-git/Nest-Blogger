import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { UserService } from '../../users/providers/user.service';

@Injectable()
export class AuthService {
	constructor(
		@Inject(forwardRef(() => UserService))
		private readonly UserService: UserService,
	) {}
	public login(username: string, password: string, id: string) {
		const user = this.UserService.findOneUser(id);
		return 'SAMPLE_TOKEN';
	}

	public isAuth() {
		return true;
	}
}
