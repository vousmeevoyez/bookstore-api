import { Injectable } from '@nestjs/common';
import { InjectRepository as InjectModel} from '@nestjs/typeorm';
import { Repository as Model} from 'typeorm';
import { UserEntity } from './user.entity';
import { ICreateUser, IGetUser } from './user.interface';

@Injectable()
export class UserRepository {
  constructor(
    @InjectModel(UserEntity)
    private readonly model: Model<UserEntity>,
  ) {}

  async createUser(parameter: ICreateUser): Promise<UserEntity> {
    const record = this.model.create(parameter);
    return this.model.save(record);
  }

  async getUser({id}: IGetUser): Promise<UserEntity> {
    return this.model.findOneBy({id});
  }
}
