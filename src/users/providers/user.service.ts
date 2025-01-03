import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { GetUserParamsDto } from '../dtos/get-user-param.dto';
import { AuthService } from '../../auth/provider/auth.service';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/user-create.dto';

/**
 * Class to connect to User table and perform business operations
 */
@Injectable()
export class UserService {
	constructor(
		@Inject(forwardRef(() => AuthService))
		private readonly AuthService: AuthService,

		@InjectRepository(User)
		private userRepository: Repository<User>,
	) {}
	/**
	 * Create user in db
	 */

	public async createUser(createUserDto: CreateUserDto) {
		// check user already exists
		const existingUser = await this.userRepository.findOne({
			where: { email: createUserDto.email },
		});
		// no need to await now it create in local file when we save it db so we use db
		let newUser = this.userRepository.create(createUserDto);
		newUser = await this.userRepository.save(newUser);
		return newUser;
	}

	/**
	 * Get all the user from the database
	 */
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

	/**
	 * Get single user details by its id
	 */
	public findOneUser(id: string) {
		return {
			id: 1232,
			name: 'Doe',
			email: 'doe@example.com',
		};
	}
}
