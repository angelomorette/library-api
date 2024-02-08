import { Schema } from 'mongoose';

export const BookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publicationYear: { type: Number, required: true },
    genre: { type: String, required: true },
    availableCopies: { type: Number, default: 0 },
    isAvailable: { type: Boolean, default: true }
})

