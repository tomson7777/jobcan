import { Body, Controller, Get, Param, Post, UseGuards, UsePipes } from '@nestjs/common';

import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { Offer } from '../offers/interfaces/offer.interface';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserSchema } from './create-user.schema';
import { CreateUserDto } from './create-user.dto';
import { Roles } from '../auth/role.decorator';
import { Role } from '../shared/role.enum';
import { RoleGuard } from '../auth/role.guard';

@Controller('users')
@UseGuards(RoleGuard)
@UseGuards(AuthGuard('jwt'))
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @Roles(Role.admin)
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get(':id')
  @Roles(Role.admin)
  findOne(@Param('id') id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @Get(':id/offers')
  @Roles(Role.admin)
  findOffersByUserId(@Param('id') id: string): Promise<Offer[]> {
    return this.usersService.findOffersById(id);
  }

  @Post()
  @UsePipes(new JoiValidationPipe(CreateUserSchema))
  @Roles(Role.admin)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
