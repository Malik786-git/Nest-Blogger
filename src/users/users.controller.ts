import { Controller, Get, Param, Post, Query, Body, Headers, Ip } from '@nestjs/common';

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
    @Param('option') option: string,
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ): string {
    console.log(id);
    console.log(option);
    console.log(limit);
    console.log(offset);
    return 'Get single users';
  }
  @Post()
  public createPost(@Body() body: any, @Headers() headers:any, @Ip() ip:any): string {
    console.log(body);
    console.log(headers);
    console.log(ip);
    return 'user created successfully';
  }
}
