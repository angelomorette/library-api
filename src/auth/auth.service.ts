import {
  Injectable,
  NotAcceptableException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '../users/interface/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    password: string,
  ): Promise<{ access_token: string }> {
    try {
      const user: User = await this.userService.findOne(username);

      if (!user) {
        throw new NotAcceptableException('could not find the user');
      }

      if (await bcrypt.compare(password, user.password)) {
        const payload = { sub: user._id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };
      }
    } catch (error) {
      throw new UnauthorizedException();
    }
  }

  async refreshAccessToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.secret,
      });
      const newAccessToken = this.jwtService.sign(
        { username: payload.username, sub: payload.sub },
        { expiresIn: '7d' },
      );
      return {
        access_token: newAccessToken,
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
