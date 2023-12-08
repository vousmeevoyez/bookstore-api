import { IsNumber, IsString, MinLength, IsArray } from 'class-validator';
import { ICreateBook, IGetBook } from './book.interface';

export class CreateBookDto implements ICreateBook{
  @IsString()
  @MinLength(1)
  title: string;

  @IsString()
  @MinLength(1)
  writer: string;

  @IsString()
  @MinLength(1)
  imageUrl: string;

  @IsNumber()
  price: number;

  @IsArray()
  tags: string[];
}

export class GetBookDto implements IGetBook{
  @IsNumber()
  id: number;
}
