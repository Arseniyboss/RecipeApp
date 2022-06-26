import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserDetails } from "../actions/user/details";
import { addRecipe } from "../actions/favorites/add";
import { removeRecipe } from "../actions/favorites/remove";
import { USER_DETAILS_RESET } from "../constants/user/details";
import { ADD_FAVORITE_RECIPE_RESET } from "../constants/favorites/add";
import { REMOVE_FAVORITE_RECIPE_RESET } from "../constants/favorites/remove";

export const useFavorites = () => {
  // prevent multiple clicks on the heart icons
  const [isToggling, setIsToggling] = useState(false);

  const { userInfo } = useSelector((state) => state.user.userLogin);

  const {
    user: { favorites = [] } = {},
    loading: userLoading,
    error,
  } = useSelector((state) => state.user.userDetails);

  const { success: addSuccess } = useSelector(
    (state) => state.favorites.addToFavorites
  );

  const { success: removeSuccess } = useSelector(
    (state) => state.favorites.removeFromFavorites
  );

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    setIsToggling(false);
    if (userInfo || addSuccess || removeSuccess) {
      if (error) return;
      dispatch(getUserDetails());
      dispatch({ type: ADD_FAVORITE_RECIPE_RESET });
      dispatch({ type: REMOVE_FAVORITE_RECIPE_RESET });
    }
  }, [dispatch, userInfo, removeSuccess, addSuccess, error]);

  useEffect(() => {
    return () => {
      dispatch({ type: USER_DETAILS_RESET });
    };
  }, [dispatch]);

  const isAlreadyAdded = (id) => {
    return favorites.find((recipe) => recipe._id === id);
  };

  const toggleFavorites = (recipe) => {
    if (!userInfo) {
      return navigate("/login");
    }
    if (error) {
      return alert(error);
    }

    setIsToggling(true);
    if (isToggling) return;

    if (isAlreadyAdded(recipe._id)) {
      return dispatch(removeRecipe(recipe._id));
    }
    dispatch(addRecipe(recipe));
  };

  return {
    userLoading,
    error,
    favorites,
    toggleFavorites,
    isAlreadyAdded,
  };
};
