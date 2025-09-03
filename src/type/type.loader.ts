import { TypeService } from './type.service';
import { Type } from './type.entity';
import { Loader } from 'src/loader/loader';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TypeLoader extends Loader<number, Type> {
  constructor(private readonly typeService: TypeService) {
    super(typeService);
  }
}
