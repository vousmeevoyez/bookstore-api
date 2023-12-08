import { IsEmail, IsNumber } from 'class-validator';
import { ICreateUserWithoutPoint, IGetUser } from './user.interface';

export class CreateUserDto implements ICreateUserWithoutPoint{
  @IsEmail()
  email: string;
}

export class GetUserDto implements IGetUser{
  @IsNumber()
  id: number;
}
