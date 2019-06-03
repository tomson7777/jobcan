import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, FindConditions, Repository, UpdateResult } from 'typeorm';

import { Offer } from './offer.entity';
import { CreateOfferDto } from './create-offer.dto';
import { PageOptions, paginate, Pagination, SearchOptions } from '../utils/pagination';

@Injectable()
export class OffersService {
  constructor(
    @InjectRepository(Offer) private readonly offerRepository: Repository<Offer>,
  ) {}

  findAll(pageOptions: PageOptions, searchOptions?: SearchOptions<Offer>): Promise<Pagination<Offer>> {
    return paginate<Offer>(this.offerRepository, pageOptions, searchOptions);
  }

  create(offer: CreateOfferDto): Promise<Offer> {
    const offerEntity = new Offer();
    offerEntity.title = offer.title;
    // offerEntity.userId = offer.userId;
    return this.offerRepository.save(offerEntity);
  }

  findOne(id: string): Promise<Offer> {
    return this.offerRepository.findOne(id);
  }

  async findOneWithCompany(id: string): Promise<any> {
    return await this.offerRepository
      .createQueryBuilder('offer')
      .select(['offer', 'user.company'])
      .leftJoin('offer.user', 'user')
      .where('offer.id = :id', { id })
      .getOne();
  }

  update(id: string, offer: CreateOfferDto): Promise<UpdateResult> {
    return this.offerRepository.update(id, offer);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.offerRepository.delete(id);
  }
}
