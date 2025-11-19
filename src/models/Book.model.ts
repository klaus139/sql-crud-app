import { Schema, model, Document }     from 'mongoose';
import { IUser } from './user.model.js';

export interface IBook extends Document {
    title: string;
    author: string;
    category: string;
    genre: string;
    pdfUrl: string;
    status: 'available' | 'borrowed';
    ownerId?: Schema.Types.ObjectId;
}

const BookSchema = new Schema<IBook> (
    {
        title: { type: String, required: true},
        author: { type: String, required: true },
        category: { type: String, required: true  },
        genre: { type: String, required: true },
        pdfUrl: { type: String, required: true },
        status: { type: String, enum: ['available', 'borrowed'], default: 'available' },
        ownerId: { type: Schema.Types.ObjectId, ref: 'User', required: false },
    },
    { timestamps: true }
);

export default model<IBook>('Book', BookSchema);
