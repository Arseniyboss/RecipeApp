import asyncHandler from "express-async-handler";
import Recipe from "../../models/Recipe.js";

export const getRecipes = asyncHandler(async (req, res) => {
  const recipes = await Recipe.find({});
  res.status(200).json(recipes);
});
