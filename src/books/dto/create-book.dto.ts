export class CreateBookDto {
    readonly title: string;
    readonly author: string;
    readonly publicationYear: number;
    readonly genre: string;
    readonly availableCopies?: number;
    readonly isAvailable?: boolean;
  }