import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';

@Controller()
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post('/users')
  createUser(@Body() parameter: CreateUserDto) {
    return this.service.createUser(parameter);
  }
}
