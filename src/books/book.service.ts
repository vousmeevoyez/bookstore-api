import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { ICreateBook, IGetBook } from './book.interface';
import { BookEntity } from './book.entity';

@Injectable()
export class BookService {
  constructor(private readonly repository: BookRepository) {}

  async createBook(parameter: ICreateBook): Promise<BookEntity> {
    return this.repository.createBook(parameter)
  }

  async getBook(parameter: IGetBook): Promise<BookEntity> {
    return this.repository.getBook(parameter)
  }
}
