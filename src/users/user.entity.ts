import { OrderEntity } from '../orders/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 320 })
  email: string;

  @Column()
  point: number;

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[]
}
