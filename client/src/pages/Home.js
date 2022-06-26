import { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { useDebounce } from "../hooks/useDebounce";
import { useSearch } from "../hooks/useSearch";
import { useFavorites } from "../hooks/useFavorites";
import { Heading } from "../GlobalStyle";
import { RecipeContainer, RecipeWrapper, RecipeText } from "../styles/Recipe";
import Meta from "../components/Meta";
import Search from "../components/Search/Search";
import Recipe from "../components/Recipe/Recipe";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";
import { getRecipes } from "../actions/recipe/list";
import { GET_RECIPES_RESET } from "../constants/recipe/list";

const Home = () => {
  const [name, setName] = useLocalStorage("name", "");
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const debouncedName = useDebounce(name);

  const { loading, error, recipes } = useSelector(
    (state) => state.recipe.recipeList
  );

  const { userInfo } = useSelector((state) => state.user.userLogin);

  const dispatch = useDispatch();

  const { userLoading, toggleFavorites, isAlreadyAdded } = useFavorites();

  useEffect(() => {
    dispatch(getRecipes());
    return () => {
      dispatch({ type: GET_RECIPES_RESET });
    };
  }, [dispatch, debouncedName]);

  const search = useSearch(debouncedName);

  // useMemo instead of useEffect to prevent additional rerenders that cause text flicker (No recipes matched your search criteria)

  useMemo(() => {
    if (recipes) {
      setFilteredRecipes(search(recipes));
    }
    // eslint-disable-next-line
  }, [recipes]);

  return (
    <>
      <Meta title="Home" />
      <Heading>Latest Recipes</Heading>
      <Search name={name} setName={setName} />
      {loading || (userInfo && userLoading) ? (
        <Loader variant="primary" />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : (
        <RecipeContainer>
          {filteredRecipes.map((recipe) => (
            <RecipeWrapper key={recipe._id}>
              <Recipe
                {...recipe}
                recipe={recipe}
                toggleFavorites={toggleFavorites}
                isAlreadyAdded={isAlreadyAdded}
              />
            </RecipeWrapper>
          ))}
        </RecipeContainer>
      )}
      {!loading && filteredRecipes.length === 0 && (
        <RecipeText>No recipes matched your search criteria</RecipeText>
      )}
    </>
  );
};

export default Home;
