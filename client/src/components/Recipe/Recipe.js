import { HeartIcons, RecipeTime, RecipeDuration } from "../../styles/Recipe";
import {
  RecipeContainer,
  RecipeLink,
  RecipeImage,
  RecipeFooter,
  RecipeName,
  RecipeRating,
} from "./Styles";
import { RiTimerLine } from "react-icons/ri";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Rating from "../Rating/Rating";

const Recipe = ({
  _id,
  name,
  image,
  duration,
  numReviews,
  rating,
  recipe,
  toggleFavorites,
  isAlreadyAdded,
}) => {
  return (
    <RecipeContainer>
      <RecipeLink to={`/recipe/${_id}`}>
        <RecipeImage src={image} alt={name} />
      </RecipeLink>
      <HeartIcons onClick={() => toggleFavorites(recipe)}>
        {isAlreadyAdded(_id) ? <FaHeart /> : <FiHeart />}
      </HeartIcons>
      <RecipeFooter>
        <RecipeLink to={`/recipe/${_id}`}>
          <RecipeName>{name}</RecipeName>
        </RecipeLink>
        <RecipeRating>
          <Rating
            value={rating}
            text={`${numReviews} ${numReviews === 1 ? "review" : "reviews"} `}
          />
        </RecipeRating>
        <RecipeTime>
          <RiTimerLine />
          <RecipeDuration>{duration}</RecipeDuration>
        </RecipeTime>
      </RecipeFooter>
    </RecipeContainer>
  );
};

export default Recipe;
