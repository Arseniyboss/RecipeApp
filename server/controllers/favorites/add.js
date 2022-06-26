import asyncHandler from "express-async-handler";
import User from "../../models/User.js";

export const addRecipe = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  const { name } = req.body;

  if (user) {
    const recipe = {
      ...req.body,
      user: req.user._id,
    };

    const alreadyAdded = user.favorites.find((recipe) => recipe.name === name);

    if (alreadyAdded) {
      res.status(400);
      throw new Error("Item already added");
    }

    user.favorites.push(recipe);

    await user.save();
    res.status(201).json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});
