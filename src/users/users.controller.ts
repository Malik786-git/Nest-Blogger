import {
	Controller,
	Get,
	Param,
	Post,
	Query,
	Body,
	Headers,
	Ip,
	ParseIntPipe,
	DefaultValuePipe,
	ValidationPipe,
	Patch,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/user-create.dto';
import { GetUserParamsDto } from './dtos/get-user-param.dto';
import { UserPatchDto } from './dtos/user-patch.dto';
import { UserService } from './providers/user.service';
import {ApiTags} from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UsersController {
	constructor(
		// injecting user service
		private readonly UserService: UserService,
	) {}

	@Get()
	public getUsers(): string {
		return 'Get all users';
	}

	// use service for business logic
	@Get('service/:id?')
	public getUserService(
		@Param() GetUserParamsDto: GetUserParamsDto,
		@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
		@Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
	) {
		return this.UserService.findAllUsers(GetUserParamsDto, limit, page);
	}

	// ? mean id is optional api not show err
	@Get('single/:id/:option?')
	public getSingleUsers(@Param() params: any, @Query() query: any): string {
		console.log(params);
		console.log(query);
		return 'Get single users';
	}
	// get each params n query separately
	@Get('/more/single/:id/:option?')
	public getMoreSpecificDataOfSingleUsers(
		@Param('id') id: string,
		@Param('option', ParseIntPipe) option: number | undefined,
		@Query('limit', new DefaultValuePipe(10)) limit: string,
		@Query('offset') offset: string,
	): string {
		console.log(typeof id);
		console.log(typeof option); //Note: we get err if we get option param as a string, but if we not pass option key coz its optional param so it still show validation err coz validation pipe only apply on req params
		console.log(typeof limit, limit); // default, we get limit 10, if user not send a limit param
		console.log(typeof offset);
		return 'Get single users';
	}

	@Get('dto/:id?')
	public getDtoParam(
		@Param() getUserDtoParam: GetUserParamsDto,
		@Query() query: any,
	): string {
		console.log(getUserDtoParam);
		console.log(query);
		return 'Get single users';
	}

	@Post()
	public createPost(
		// @Body() body: any, // simple body req
		// @Body(new ValidationPipe()) createUserDto: CreateUserDto, // add validation pipe on particular http req
		@Body() createUserDto: CreateUserDto, // validation pips applies global on every req on bootstrap method.
		@Headers() headers: any,
		@Ip() ip: any,
	): string {
		// console.log(body); // simple body req
		// console.log(headers);
		// console.log(ip);
		console.log(typeof createUserDto); // but create user dto is not instance of CreateUserDto class.
		console.log(createUserDto instanceof CreateUserDto); // return false coz its object.. but if you want to req object must be instants of you DTO class, enable transformation in validation pipe/ global validation pipe
		return 'user created successfully';
	}

	@Patch()
	public patchUser(@Body() userPatchDto: UserPatchDto): string {
		console.log(userPatchDto);
		return 'patch user';
	}
}
