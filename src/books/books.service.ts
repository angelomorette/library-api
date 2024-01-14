import { Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
// import { UpdateBookDto } from './dto/update-book.dto';
import { Book } from './interface/book.interface';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOK_MODEL')
    private bookModel: Model<Book>
  ) { }

  create(createBookDto: CreateBookDto) {
    const createBook = new this.bookModel(createBookDto)
    return createBook.save()
  }

  findAll(): Promise<Book[]> {
    return this.bookModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} book`;
  // }

  // update(id: number, updateBookDto: UpdateBookDto) {
  //   return `This action updates a #${id} book`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} book`;
  // }
}
