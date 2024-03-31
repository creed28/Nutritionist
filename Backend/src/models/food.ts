import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  kCal: { type: Number, required: true },
  protein: { type: Number, required: true },
  fat: { type: Number, required: true },
  carbs: { type: Number, required: true },
  inTable: { type: Boolean, required: true }
});

type Food = mongoose.InferSchemaType<typeof foodSchema>;

export default mongoose.model<Food>("Food", foodSchema);
 