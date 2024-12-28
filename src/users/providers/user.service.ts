import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-param.dto';
import { AuthService } from '../../auth/provider/auth.service';

@Injectable()
export class UserService {
	constructor(
		@Inject(forwardRef(() => AuthService))
		private readonly AuthService: AuthService,
	) {}

	public findAllUsers(
		GetUserParamsDto: GetUserParamsDto,
		limit: number,
		page: number,
	) {
		const isAuth = this.AuthService.isAuth();
		console.log(GetUserParamsDto, limit, page, 'is auth', isAuth);
		return [
			{
				name: 'John Doe',
				email: 'john@example.com',
			},
			{
				name: 'Doe',
				email: 'doe@example.com',
			},
		];
	}

	public findOneUser(id: string) {
		return {
			id: 1232,
			name: 'Doe',
			email: 'doe@example.com',
		};
	}
}
