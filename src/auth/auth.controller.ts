import { Controller } from '@nestjs/common';
import { AuthService } from './provider/auth.service';
import {ApiTags} from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
	constructor(private readonly AuthService: AuthService) {}
}
