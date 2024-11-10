// src/models/productModel.ts
import mongoose, { Schema, Document } from 'mongoose';

export interface SaleProductType extends Document {
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

const saleProductSchema: Schema = new Schema({
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

const SaleProduct = mongoose.models.SaleProduct || mongoose.model<SaleProductType>('SaleProduct', saleProductSchema);
export default SaleProduct