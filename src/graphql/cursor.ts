import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

@Scalar('Cursor')
export class Cursor implements CustomScalar<string, string> {
  parseValue(value: string): string {
    return value;
  }

  serialize(value: string): string {
    return value;
  }

  parseLiteral(ast: ValueNode): string {
    if (ast.kind === Kind.STRING) {
      return ast.value;
    }
    return '';
  }
}
