import { Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-param.dto';

@Injectable()
export class UserService {
	public findAllUsers(
		GetUserParamsDto: GetUserParamsDto,
		limit: number,
		page: number,
	) {
		console.log(GetUserParamsDto, limit, page);
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

	public findOneUser(id: number) {
		return {
			id: 1232,
			name: 'Doe',
			email: 'doe@example.com',
		};
	}
}
