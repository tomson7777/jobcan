import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private readonly schema: any) {}

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = Joi.validate(value, this.schema);

    if (error) {
      const messages = error.details.map(d => d.message).join(',');
      throw new BadRequestException(messages);
    }

    return value;
  }
}
