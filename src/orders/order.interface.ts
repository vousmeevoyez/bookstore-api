import { BookEntity } from "../books/book.entity";
import { IGetBook } from "../books/book.interface";
import { UserEntity } from "../users/user.entity";
import { IGetUser } from "../users/user.interface";

export enum OrderStatus {
  Created,
  Processed,
  Cancelled,
  Done
}

export interface ICreateOrder {
  user: UserEntity;
  book: BookEntity;
}

export interface ICreateOrderFromDto {
  user: IGetUser;
  book: IGetBook;
}
