import Rating from "../Rating/Rating";
import { RecipeReviewContainer, RecipeReviewComment } from "./Styles";

const Review = ({ name, rating, createdAt, comment, underline }) => {
  return (
    <RecipeReviewContainer underline={underline}>
      <strong>{name}</strong>
      <Rating value={rating} />
      <p>{createdAt.replaceAll("-", ".").slice(0, 10)}</p>
      {comment && <RecipeReviewComment>{comment}</RecipeReviewComment>}
    </RecipeReviewContainer>
  );
};

export default Review;
