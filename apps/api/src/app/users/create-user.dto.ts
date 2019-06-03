import { ApiModelProperty } from '@nestjs/swagger';
import { Role } from '../shared/role.enum';

export class CreateUserDto {
  @ApiModelProperty()
  readonly firstName: string;

  @ApiModelProperty()
  readonly email: string;

  @ApiModelProperty()
  readonly password: string;

  @ApiModelProperty()
  readonly role: Role;
}
