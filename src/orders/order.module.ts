import { Module } from "@nestjs/common";
import { OrderService } from "./order.service";
import { OrderController } from "./order.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { OrderRepository } from "./order.repository";
import { OrderEntity } from "./order.entity";
import { BookModule } from "../books/book.module";
import { UserModule } from "../users/user.module";

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity]), BookModule, UserModule],
  controllers: [OrderController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
