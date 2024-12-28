// Data transfer Object

import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './user-create.dto';

// mapped-typs PartialType help to inherit all property of user dto coz in patch req we need create user data..
// so no need to write user create validation once again for patch with optional you just inherit it with the help of mapped types (nest js package)
//npm i @nestjs/mapped-types@2.0.5
export class UserPatchDto extends PartialType(CreateUserDto) {}
