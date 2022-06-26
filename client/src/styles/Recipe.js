import styled from "styled-components";

export const RecipeContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));

  @media screen and (max-width: 1119px) {
    max-width: 850px;
  }
  @media screen and (max-width: 839px) {
    max-width: 560px;
  }
`;

export const RecipeWrapper = styled.div`
  width: 250px;
  border-radius: 5px;
  margin: 0 auto;
`;

export const RecipeText = styled.p`
  text-align: center;
`;

export const RecipeTime = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3px;

  @media screen and (max-width: 390px) {
    margin-top: 1rem;
  }
`;

export const RecipeDuration = styled.p`
  letter-spacing: 2px;
  margin-left: 5px;
`;

export const HeartIcons = styled.div`
  color: white;
  font-size: 1.3rem;
  position: absolute;
  right: 7px;
  top: 7px;
  cursor: pointer;
`;
