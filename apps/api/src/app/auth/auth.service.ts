import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { JwtPayload } from './jwt-payload.interface';
import { genSalt, hash, compare } from 'bcrypt';
import { User } from '../users/user.entity';
import { RegisterUserDto } from './register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LoginUserDto } from './login-user.dto';
import { UserToken } from './user-token.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async login(loginUserDto: LoginUserDto): Promise<UserToken> {
    const payload: JwtPayload = {
      email: loginUserDto.email,
    };
    const user = await this.validateUser(payload);
    const isPasswordOK = await compare(loginUserDto.password, user.password);

    if (!isPasswordOK) {
      throw new HttpException('Invalid password', HttpStatus.BAD_REQUEST);
    }

    const token = this.jwtService.sign(payload);
    return { user, token };
  }

  async validateUser(payload: JwtPayload): Promise<User> {
    return await this.usersService.findOneByEmail(payload.email);
  }

  async create(registerUserDto: RegisterUserDto): Promise<UserToken> {
    const userEntity = new User();
    userEntity.email = registerUserDto.email.trim().toLowerCase();
    const salt = await genSalt(10);
    userEntity.password = await hash(registerUserDto.password, salt);

    const user = await this.userRepository.save(userEntity);

    const payload: JwtPayload = {
      email: registerUserDto.email,
    };

    const token = this.jwtService.sign(payload);

    return { user, token };
  }
}
