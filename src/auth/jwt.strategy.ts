import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import * as jwksRsa from 'jwks-rsa';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      secretOrKeyProvider: jwksRsa.passportJwtSecret({
        cache: true,
        rateLimit: true,
        jwksUri: 'https://login.eveonline.com/oauth/jwks',
      }),
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      audience: ['f48027bf273c46e49cb417b201115e04', 'EVE Online'],
      issuer: 'https://login.eveonline.com',
      algorithms: ['RS256'],
      ignoreExpiration: process.env.JWT_IGNORE_EXPIRATION === 'true',
    });
  }

  async validate(payload: any) {
    return { id: payload.sub.split(':')[2], name: payload.name };
  }
}
