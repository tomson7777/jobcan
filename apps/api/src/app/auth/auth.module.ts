import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategyService } from './jwt-strategy.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: 'secretKey',
      signOptions: {
        expiresIn: 3600,
      },
    }),
    UsersModule,
  ],
  providers: [AuthService, JwtStrategyService],
  exports: [PassportModule, AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
