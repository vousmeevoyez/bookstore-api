import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './order.dto';

@Controller()
export class OrderController {
  constructor(private readonly service: OrderService) {}

  @Post('/orders')
  createOrder(@Body() parameter: CreateOrderDto) {
    return this.service.createOrder(parameter);
  }
}
