import { useState, useEffect } from "react";
import { useFavorites } from "../../hooks/useFavorites";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../../hooks/useForm";
import { HeartIcons, RecipeTime, RecipeDuration } from "../../styles/Recipe";
import {
  RecipeContainer,
  RecipeImageContainer,
  RecipeImage,
  LeftArrow,
  RecipeHeader,
  RecipeText,
  RecipeReviewContainer,
  RecipeReviewHeading,
} from "./Styles";
import {
  Form,
  FormHeading,
  FormGroup,
  FormSelect,
  TextArea,
  FormButton,
  ErrorMessage,
} from "../../styles/Form";
import Meta from "../../components/Meta";
import Loader from "../../components/Loader/Loader";
import Message from "../../components/Message/Message";
import Ingredient from "../../components/Ingredient/Ingredient";
import Review from "../../components/Review/Review";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { RiTimerLine } from "react-icons/ri";
import { getRecipeDetails } from "../../actions/recipe/details";
import { createRecipeReview } from "../../actions/recipe/createReview";
import { GET_RECIPE_DETAILS_RESET } from "../../constants/recipe/details";
import { RECIPE_CREATE_REVIEW_RESET } from "../../constants/recipe/createReview";
import { RATING_REQUIRED } from "../../constants/validation/errors";

const Recipe = () => {
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);

  const initialState = {
    rating: 0,
    comment: "",
  };

  const validationSchema = {
    rating: {
      required: {
        value: true,
        message: RATING_REQUIRED,
      },
    },
  };

  const { id } = useParams();

  const submitForm = () => {
    dispatch(
      createRecipeReview(id, {
        rating: values.rating,
        comment: values.comment,
      })
    );
    setDisabled(true);
    setValues(initialState);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const { values, setValues, errors, handleChange, handleSubmit } = useForm(
    initialState,
    submitForm,
    validationSchema
  );

  const { loading, error, recipe } = useSelector(
    (state) => state.recipe.recipeDetails
  );

  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.user.userLogin);

  const { success: successReview, error: errorReview } = useSelector(
    (state) => state.recipe.recipeReviewCreate
  );

  useEffect(() => {
    setDisabled(false);
    if (successReview) {
      alert("Review Submitted!");
    }
    dispatch(getRecipeDetails(id));
    return () => {
      dispatch({ type: GET_RECIPE_DETAILS_RESET });
      dispatch({ type: RECIPE_CREATE_REVIEW_RESET });
    };
  }, [successReview, setValues, dispatch, id]);

  useEffect(() => {
    if (errorReview) {
      setMessage(errorReview);
      setDisabled(false);
    }
  }, [errorReview]);

  useEffect(() => {
    setMessage("");
  }, [errors]);

  const { userLoading, toggleFavorites, isAlreadyAdded } = useFavorites();

  return (
    <>
      {loading || (userInfo && userLoading) ? (
        <Loader variant="rainbow" />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <>
          <Meta title={recipe.name} />
          <RecipeContainer>
            <RecipeImageContainer>
              <RecipeImage src={recipe.image} alt={recipe.name} />
              <Link to="/">
                <LeftArrow />
              </Link>
              <HeartIcons onClick={() => toggleFavorites(recipe)}>
                {isAlreadyAdded(id) ? <FaHeart /> : <FiHeart />}
              </HeartIcons>
            </RecipeImageContainer>
            <div>
              <RecipeHeader>
                <RecipeText>{recipe.name}</RecipeText>
                <RecipeTime>
                  <RiTimerLine />
                  <RecipeDuration>{recipe.duration}</RecipeDuration>
                </RecipeTime>
              </RecipeHeader>
              <RecipeText>Ingredients</RecipeText>
              {recipe.ingredients.map((ingredient) => (
                <Ingredient key={ingredient._id} {...ingredient} />
              ))}
            </div>
            <RecipeReviewContainer>
              <RecipeReviewHeading>Reviews</RecipeReviewHeading>
              {!recipe.reviews.length && <Message primary>No Reviews</Message>}
              <div>
                {recipe.reviews.map((review) =>
                  recipe.reviews.length === 1 ? (
                    <Review key={review._id} {...review} />
                  ) : (
                    <Review key={review._id} {...review} underline />
                  )
                )}
                {message && <Message variant="error">{message}</Message>}
                <div>
                  {userInfo ? (
                    <Form onSubmit={handleSubmit}>
                      <FormHeading>Write a review</FormHeading>
                      <FormGroup>
                        <label>Rating</label>
                        <div>
                          <FormSelect
                            as="select"
                            name="rating"
                            value={values.rating}
                            onChange={handleChange}
                          >
                            <option value="">Select</option>
                            <option value="1">1 - Terrible</option>
                            <option value="2">2 - Bad</option>
                            <option value="3">3 - Good</option>
                            <option value="4">4 - Very Good</option>
                            <option value="5">5 - Excellent</option>
                          </FormSelect>
                        </div>
                        {errors.rating ? (
                          <ErrorMessage>{errors.rating}</ErrorMessage>
                        ) : null}
                      </FormGroup>
                      <FormGroup>
                        <label htmlFor="comment">Comment</label>
                        <TextArea
                          name="comment"
                          id="comment"
                          as="textarea"
                          rows={5}
                          value={values.comment}
                          onChange={handleChange}
                          onKeyDown={handleKeyDown}
                        ></TextArea>
                      </FormGroup>
                      <FormButton disabled={disabled}>Submit</FormButton>
                    </Form>
                  ) : (
                    <Message variant="info">
                      Please sign in to write a review
                    </Message>
                  )}
                </div>
              </div>
            </RecipeReviewContainer>
          </RecipeContainer>
        </>
      )}
    </>
  );
};

export default Recipe;
