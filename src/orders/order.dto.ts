import { Type } from "class-transformer";
import { ValidateNested } from 'class-validator';
import { IGetUser } from '../users/user.interface';
import { GetBookDto } from "../books/book.dto";
import { GetUserDto } from "../users/user.dto";
import { IGetBook } from "../books/book.interface";


export class CreateOrderDto {
  @Type(() => GetUserDto)
  @ValidateNested()
  user: IGetUser;

  @Type(() => GetBookDto)
  @ValidateNested()
  book: IGetBook;
}
