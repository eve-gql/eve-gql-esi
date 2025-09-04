import { TypeService } from './type.service';
import { Type } from './type.entity';
import { Injectable } from '@nestjs/common';
import { Loader } from 'src/loader/loader';

@Injectable()
export class TypeLoader extends Loader<number, Type> {
  constructor(private readonly typeService: TypeService) {
    super(typeService);
  }
}
