import { Injectable } from '@nestjs/common';
import { Category } from './category.entity';
import axios from 'axios';

@Injectable()
export class CategoryService {
  async findAll(): Promise<number[]> {
    const idsRes = await axios.get('https://esi.evetech.net/latest/universe/categories/');
    return idsRes.data;
  }

  async findOne(category_id: number): Promise<Category | undefined> {
    const res = await axios.get(
      `https://esi.evetech.net/latest/universe/categories/${category_id}/`
    );
    return res.data;
  }
}
