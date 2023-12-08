import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 500 })
  title: string;

  @Column({ length: 500 })
  writer: string;

  @Column({ length: 500 })
  imageUrl: string;

  @Column({type: "float"})
  price: number;

  @Column("simple-array")
  tags: string[];
}
