import mongoose, {Schema, Document} from "mongoose";
interface CategoryType  extends Document {
    id: number;
    name: string;
    image: string;
}

const categorySchema: Schema = new Schema({
    id: { type: Number },
    name: { type: String },
    image: { type: String },
});

const Category  = mongoose.models.Category ||  mongoose.model<CategoryType>('Categories', categorySchema);
export default Category