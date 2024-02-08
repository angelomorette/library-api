import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) { }

  @UseGuards(AuthenticatedGuard)
  @Post()
  create(@Body() createBookDto: CreateBookDto) {
    return this.booksService.create(createBookDto);
  }
  
  @UseGuards(AuthenticatedGuard)
  @Get()
  findAll() {
    return this.booksService.findAll();
  }
}
