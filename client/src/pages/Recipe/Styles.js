import styled from "styled-components";
import { BsArrowLeftCircle } from "react-icons/bs";

export const RecipeContainer = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin: 5rem auto;
  max-width: 850px;

  @media screen and (max-width: 860px) {
    grid-template-columns: none;
    margin: 3rem auto;
  }
`;

export const RecipeImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 350px;

  @media screen and (max-width: 1024px) {
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  @media screen and (max-width: 440px) {
    width: 350px;
    height: 300px;
  }

  @media screen and (max-width: 390px) {
    width: 300px;
    height: 250px;
  }

  @media screen and (max-width: 340px) {
    width: 250px;
    height: 200px;
  }
`;

export const RecipeImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const LeftArrow = styled(BsArrowLeftCircle)`
  font-size: 1.4rem;
  color: white;
  position: absolute;
  top: 7px;
  left: 7px;
`;

export const RecipeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  @media screen and (max-width: 390px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const RecipeText = styled.p`
  font-weight: bold;
  text-align: center;
`;

export const RecipeReviewContainer = styled.div`
  margin-top: 1.5rem;
  width: 95%;

  @media screen and (max-width: 860px) {
    width: 80%;
  }

  @media screen and (max-width: 400px) {
    width: initial;
  }
`;

export const RecipeReviewHeading = styled.h1`
  margin-bottom: 1rem;
`;
