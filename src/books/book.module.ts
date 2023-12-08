import { Module } from "@nestjs/common";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookRepository } from "./book.repository";
import { BookEntity } from "./book.entity";

@Module({
  exports: [BookService],
  imports: [TypeOrmModule.forFeature([BookEntity])],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class BookModule {}
