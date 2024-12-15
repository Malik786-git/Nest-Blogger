import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers():string{
    return "Get all users";
  }
}
