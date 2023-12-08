import { BookEntity } from '../books/book.entity';
import { UserEntity } from '../users/user.entity';
import { CreateDateColumn, Entity, PrimaryGeneratedColumn, ManyToOne, ManyToMany, JoinTable } from 'typeorm';

@Entity()
export class OrderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @ManyToMany(() => BookEntity)
  @JoinTable()
  books: BookEntity[]

  @CreateDateColumn()
  createdAt: Date;
}
