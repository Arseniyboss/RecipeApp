import asyncHandler from "express-async-handler";
import Recipe from "../../models/Recipe.js";

export const getRecipe = asyncHandler(async (req, res) => {
  const recipe = await Recipe.findById(req.params.id);

  if (recipe) {
    res.status(200).json(recipe);
  } else {
    res.status(404);
    throw new Error("Recipe not found");
  }
});
