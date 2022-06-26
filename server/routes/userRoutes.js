import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { register } from "../controllers/user/register.js";
import { login } from "../controllers/user/login.js";
import { verifyEmail } from "../controllers/user/verifyEmail.js";
import { forgotPassword } from "../controllers/user/forgotPassword.js";
import { resetPassword } from "../controllers/user/resetPassword.js";
import { deleteUser } from "../controllers/user/delete.js";
import { getUserDetails } from "../controllers/user/details.js";
import { updateUser } from "../controllers/user/update.js";
import { addRecipe } from "../controllers/favorites/add.js";
import { removeRecipe } from "../controllers/favorites/remove.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/:id/verify/:token", verifyEmail);
router.post("/forgotPassword", forgotPassword);
router.put("/resetPassword/:token", resetPassword);
router.delete("/:id", protect, deleteUser);
router.route("/details").get(protect, getUserDetails).put(protect, updateUser);
router.post("/:id/recipe", protect, addRecipe);
router.delete("/:userId/recipe/:recipeId", protect, removeRecipe);

export default router;
