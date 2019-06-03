import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes } from '@nestjs/common';

import { Offer, OfferDetails } from './interfaces/offer.interface';
import { OffersService } from './offers.service';
import { CreateOfferDto } from './create-offer.dto';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { CreateOfferSchema } from './create-offer.schema';
import { Pagination } from '../utils/pagination';
import { Like } from 'typeorm';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/role.decorator';
import { Role } from '../shared/role.enum';

@Controller('offers')
export class OffersController {
  constructor(private readonly offersService: OffersService) {}

  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 50,
    @Query('sort') sort: string | string[] = [],
    @Query('search') searchTitlePhrase?: string,
  ): Promise<Pagination<Offer>> {
    const sortParams = Array.isArray(sort) ? sort : [sort];
    const order = sortParams
      .map(item => {
        const [sortBy, sortOrder] = item.split('.');
        return { sortBy, sortOrder: sortOrder.toUpperCase() };
      })
      .reduce((acc, item) => Object.assign(acc, { [item.sortBy]: item.sortOrder }), {});

    const where = { title: Like(`%${searchTitlePhrase}%`) };
    const searchOptions = {
      ...(sort && { order }),
      ...(searchTitlePhrase && { where }),
    };

    return this.offersService.findAll({ page, limit }, searchOptions);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(CreateOfferSchema))
  @Roles(Role.client, Role.admin)
  async create(@Body() createOfferDto: CreateOfferDto): Promise<Offer> {
    return this.offersService.create(createOfferDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Offer> {
    return this.offersService.findOne(id);
  }

  @Get(':id/details')
  findOfferWithCompany(@Param('id') id: string): Promise<OfferDetails> {
    return this.offersService.findOneWithCompany(id);
  }

  /* powinno co innego zwracać */
  @Put(':id')
  @Roles(Role.client, Role.admin)
  update(@Param('id') id: string, @Body() createOfferDto: CreateOfferDto) {
    return this.offersService.update(id, createOfferDto);
  }

  /* powinno co innego zwracać */
  @Delete(':id')
  @Roles(Role.client, Role.admin)
  remove(@Param('id') id: string) {
    return this.offersService.delete(id);
  }
}
