import styled from "styled-components";
import { Link } from "react-router-dom";

export const RecipeContainer = styled.div`
  border: 1px solid lightgrey;
  border-radius: 5px;
  margin-bottom: 20px;
  position: relative;
`;

export const RecipeLink = styled(Link)`
  text-decoration: none;
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 4px 4px 0 0;
`;

export const RecipeFooter = styled.div`
  padding: 13px;
`;

export const RecipeName = styled.p`
  color: #444;
  margin-bottom: 5px;
`;

export const RecipeRating = styled.div`
  margin: 15px 0;
`;
