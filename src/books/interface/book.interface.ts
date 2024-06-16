import { Document } from 'mongoose';

export interface Book extends Document {
  readonly title: string;
  readonly author: string;
  readonly publicationYear: number;
  readonly genre: string;
  readonly availableCopies: number;
  readonly isAvailable: boolean;
}
