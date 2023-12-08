import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { ICreateUserWithoutPoint, IGetUser } from './user.interface';
import { UserEntity } from './user.entity';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async createUser(parameter: ICreateUserWithoutPoint): Promise<UserEntity> {
    // https://hyperhire.notion.site/Fullstack-assignment_27-july-503a2bafa09c4b14bf9cf4bfd1329393
    // - When new customer is created, they get 100 point.
    return this.repository.createUser({...parameter, point: 100})
  }

  async getUser(parameter: IGetUser): Promise<UserEntity> {
    return this.repository.getUser(parameter)
  }
}
