import * as DataLoader from 'dataloader';

export abstract class FieldResolver<TType extends { id: number }> {
  constructor(private readonly l: { load: (k: number) => Promise<TType | undefined> }) {}

  protected async getField<TField>(entity: TType, field: keyof TType): Promise<TField | undefined> {
    if (entity[field] !== undefined) return entity[field] as TField;
    const corp = await this.l.load(entity.id);
    return corp ? (corp[field] as TField) : undefined;
  }
}
