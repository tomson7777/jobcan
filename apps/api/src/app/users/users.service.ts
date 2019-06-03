import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './user.entity';
import { Offer } from '../offers/offer.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Offer) private readonly offerRepository: Repository<Offer>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }

  findOneByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async create(user: CreateUserDto): Promise<User> {
    const userEntity = new User();
    userEntity.firstName = user.firstName;
    userEntity.email = user.email;
    userEntity.role = user.role;
    return await this.userRepository.save(userEntity);
  }

  findOffersById(id: string): Promise<Offer[]> {
    return this.offerRepository.find({
      where: [
        { userId: id },
      ],
    });
  }
}
