// src/models/productModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface IProduct extends Document {
    title: string;
    price: number;
    description: string;
    images: string[];
    category: {
        id: number;
        name: string;
        image: string;
    };
}

const productSchema: Schema = new Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    images: [{ type: String }],
    category: {
        id: { type: Number },
        name: { type: String },
        image: { type: String },
    },
});

const Product = mongoose.models.Product || mongoose.model<IProduct>('Product', productSchema);
export default Product