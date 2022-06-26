import mongoose from "mongoose";

const { Schema, model } = mongoose;

const reviewSchema = Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String },
    user: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const ingredientSchema = Schema({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
  },
});

const RecipeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  duration: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  ingredients: [ingredientSchema],
  reviews: [reviewSchema],
});

const Recipe = model("Recipe", RecipeSchema);

export default Recipe;
