import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { BookModule } from './books/book.module';
import { UserModule } from './users/user.module';
import { OrderModule } from './orders/order.module';

const dbModule = TypeOrmModule.forRootAsync({
  imports: [ConfigModule],
  useFactory: (configService: ConfigService) => ({
    type: 'postgres',
    host: configService.get('HOST'),
    port: +configService.get('PORT'),
    username: configService.get('USERNAME'),
    password: configService.get('PASSWORD'),
    database: configService.get('DATABASE'),
    entities: [
        __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: true,
  }),
  inject: [ConfigService],
});

export const applicationModules = [
  BookModule,
  UserModule,
  OrderModule
]

@Module({
  imports: [ConfigModule.forRoot(), dbModule, ...applicationModules],
})
export class AppModule {}
