import { ApiModelProperty } from '@nestjs/swagger';

export class RegisterUserDto {
  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;
}
