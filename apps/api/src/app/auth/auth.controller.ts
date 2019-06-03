import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JoiValidationPipe } from '../pipes/joi-validation.pipe';
import { RegisterUserDto } from './register-user.dto';
import { LoginUserDto } from './login-user.dto';
import { RegisterUserSchema } from './register-user.schema';
import { UserToken } from './user-token.interface';

@Controller('auth')
export class AuthController {
  constructor(private  readonly  authService: AuthService) {}

  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto): Promise<UserToken> {
      return this.authService.login(loginUserDto);
  }

  @Post('register')
  @UsePipes(new JoiValidationPipe(RegisterUserSchema))
  async create(@Body() registerUserDto: RegisterUserDto): Promise<UserToken> {
    console.log('registerUserDto', registerUserDto);
    return this.authService.create(registerUserDto);
  }
}
