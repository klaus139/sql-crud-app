import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role:  'user' | 'admin';
    isVerified: boolean;
    borrowedBooks: IBorrowedEntry[];
    emailVerificationToken?: string | null;
    address: string;
    password: string;
    token: string;

}

const UserSchema = new Schema<IUser>(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        role: { type: String, enum: ['user', 'admin'], default: 'user' },
        isVerified: { type: Boolean, default: false },
        emailVerificationToken: { type: String, default: null }, 
        borrowedBooks: { type: [BorrowedEntrySchema], default: [] },
        address: { type: String},
        password: { type: String },
        token: { type: String },
    },
    { timestamps: true }
);

export default model<IUser>('User', UserSchema);

