import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';

@Module({
  imports: [BooksModule, UsersModule, AuthModule],
  controllers: [AppController],
})
export class AppModule {}
