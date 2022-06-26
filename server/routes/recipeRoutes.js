import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { getRecipes } from "../controllers/recipe/getRecipes.js";
import { getRecipe } from "../controllers/recipe/getRecipe.js";
import { createRecipeReview } from "../controllers/recipe/createReview.js";

const router = express.Router();

router.get("/", getRecipes);
router.get("/:id", getRecipe);
router.post("/:id/reviews", protect, createRecipeReview);

export default router;
