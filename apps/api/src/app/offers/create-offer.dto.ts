import { ApiModelProperty } from '@nestjs/swagger';

export class CreateOfferDto {
  @ApiModelProperty()
  readonly title: string;

  @ApiModelProperty()
  readonly userId: number;
}
