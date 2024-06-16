import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>,
  ) {}

  create(createBookDto: CreateBookDto) {
    const createBook = new this.bookModel(createBookDto);
    return createBook.save();
  }

  findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }
}
