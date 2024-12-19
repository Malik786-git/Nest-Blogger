// Data transfer Object

import {
	IsNotEmpty,
	IsString,
	MaxLength,
	MinLength,
	IsOptional,
	IsEmail,
	Matches,
} from 'class-validator';

export class CreateUserDto {
	@IsString()
	@IsNotEmpty()
	@MinLength(3)
	@MaxLength(99)
	firstName: string;

	@IsString()
	@IsOptional()
	@MinLength(3)
	@MaxLength(99)
	lastName?: string;

	@IsString()
	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, {
		message:
			'Password must contain at least 1 letter, 1 number, 1 special character, and be at least 8 characters long.',
	})
	password: string;
}
