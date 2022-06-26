import asyncHandler from "express-async-handler";
import User from "../../models/User.js";

export const removeRecipe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const { recipeId } = req.params;

  const recipe = user.favorites.find((recipe) => recipe.id === recipeId);

  if (user && recipe) {
    await recipe.remove();
    await user.save();
    res.status(200).json(user);
  }
  if (!recipe) {
    res.status(404);
    throw new Error("Recipe not found");
  }
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
});
