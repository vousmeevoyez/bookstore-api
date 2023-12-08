import { Injectable } from '@nestjs/common';
import { InjectRepository as InjectModel} from '@nestjs/typeorm';
import { Repository as Model} from 'typeorm';
import { BookEntity } from './book.entity';
import { ICreateBook, IGetBook } from './book.interface';

@Injectable()
export class BookRepository {
  constructor(
    @InjectModel(BookEntity)
    private readonly model: Model<BookEntity>,
  ) {}

  async createBook(parameter: ICreateBook): Promise<BookEntity> {
    const poll = this.model.create(parameter);
    return this.model.save(poll);
  }

  async getBook(parameter: IGetBook): Promise<BookEntity> {
    return this.model.findOneBy(parameter);
  }
}
