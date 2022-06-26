import asyncHandler from "express-async-handler";
import Recipe from "../../models/Recipe.js";

export const createRecipeReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const recipe = await Recipe.findById(req.params.id);

  if (recipe) {
    const alreadyReviewed = recipe.reviews.find(
      (review) => review.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error("Recipe already reviewed");
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    recipe.reviews.push(review);

    recipe.numReviews = recipe.reviews.length;

    recipe.rating =
      recipe.reviews.reduce((acc, item) => item.rating + acc, 0) /
      recipe.reviews.length;

    await recipe.save();
    res.status(201).json({ message: "Review added" });
  } else {
    res.status(404);
    throw new Error("Recipe not found");
  }
});
