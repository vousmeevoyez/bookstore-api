import { Controller, Post, Body } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './book.dto';

@Controller()
export class BookController {
  constructor(private readonly service: BookService) {}

  @Post('/books')
  createBook(@Body() parameter: CreateBookDto) {
    return this.service.createBook(parameter);
  }
}
