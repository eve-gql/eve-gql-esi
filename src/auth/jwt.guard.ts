import { ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';

const allowedCharacterIds = [
  '95141153', // Jarvis Aurelius
];

@Injectable()
export class JwtGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext().req;
  }

  handleRequest(err, user, info) {
    if (!allowedCharacterIds.some((characterId) => characterId === user.id))
      throw new UnauthorizedException();
    return user;
  }
}
