import { useMounted } from "../hooks/useMounted";
import { useFavorites } from "../hooks/useFavorites";
import { useSelector } from "react-redux";
import { Heading } from "../GlobalStyle";
import { RecipeContainer, RecipeWrapper } from "../styles/Recipe";
import Meta from "../components/Meta";
import Recipe from "../components/Recipe/Recipe";
import Loader from "../components/Loader/Loader";
import Message from "../components/Message/Message";

const Favorites = () => {
  const mounted = useMounted();

  const { userInfo } = useSelector((state) => state.user.userLogin);

  const { userLoading, error, favorites, toggleFavorites, isAlreadyAdded } =
    useFavorites();
  return (
    <>
      <Meta title="Favorites" />
      <Heading>Favorites</Heading>
      {userInfo && (userLoading || !mounted) ? (
        <Loader variant="rainbow" />
      ) : error ? (
        <Message variant="error">{error}</Message>
      ) : favorites.length === 0 ? (
        <Message variant="info">No Favorite Recipes</Message>
      ) : (
        <RecipeContainer>
          {favorites.map((recipe) => (
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
    </>
  );
};

export default Favorites;
