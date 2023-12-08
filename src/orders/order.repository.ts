import { Injectable } from '@nestjs/common';
import { InjectRepository as InjectModel} from '@nestjs/typeorm';
import { Repository as Model} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ICreateOrder } from './order.interface';

@Injectable()
export class OrderRepository {
  constructor(
    @InjectModel(OrderEntity)
    private readonly model: Model<OrderEntity>,
  ) {}

  async createOrder(parameter: ICreateOrder): Promise<OrderEntity> {
    const record = this.model.create(parameter);
    return this.model.save(record);
  }
}
