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
} from '@nestjs/common';

@Controller('users')
export class UsersController {
	@Get()
	public getUsers(): string {
		return 'Get all users';
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
		@Query('limit') limit: string,
		@Query('offset') offset: string,
	): string {
		console.log(typeof id);
		console.log(typeof option); //Note: we get err if we get option param as a string, but if we not pass option key coz its optional param so it sill show validation err coz validation pipe only apply on req params
		console.log(typeof limit);
		console.log(typeof offset);
		return 'Get single users';
	}
	@Post()
	public createPost(
		@Body() body: any,
		@Headers() headers: any,
		@Ip() ip: any,
	): string {
		console.log(body);
		console.log(headers);
		console.log(ip);
		return 'user created successfully';
	}
}
