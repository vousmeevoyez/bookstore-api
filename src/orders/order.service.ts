import { Injectable, NotFoundException } from '@nestjs/common';
import { OrderRepository } from './order.repository';
import { ICreateOrderFromDto } from './order.interface';
import { OrderEntity } from './order.entity';
import { BookService } from '../books/book.service';
import { UserService } from '../users/user.service';

@Injectable()
export class OrderService {
  constructor(
    private readonly repository: OrderRepository,
    private readonly bookService: BookService,
    private readonly userService: UserService
  ) {}

  async createOrder({user: userParameter, book: bookParameter}: ICreateOrderFromDto): Promise<OrderEntity> {
    const userRecord = await this.userService.getUser(userParameter)
    if(!userRecord){
      throw new NotFoundException('user not found')
    }

    const bookRecord = await this.bookService.getBook(bookParameter)
    if(!bookRecord){
      throw new NotFoundException('book not found')
    }

    return this.repository.createOrder({user: userRecord, book: bookRecord})
  }
}
