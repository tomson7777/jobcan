import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsersService } from './users.service';
import { User } from './user.entity';
import { OffersModule } from '../offers/offers.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    OffersModule,
    TypeOrmModule.forFeature([User]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
