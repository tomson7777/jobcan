import { Module } from '@nestjs/common';
import { OffersService } from './offers.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Offer } from './offer.entity';
import { OffersController } from './offers.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    TypeOrmModule.forFeature([Offer]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  providers: [OffersService],
  controllers: [OffersController],
  exports: [OffersService],
})
export class OffersModule {}
