import styled from "styled-components";

export const IngredientContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 380px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }

  @media screen and (max-width: 440px) {
    width: 350px;
  }

  @media screen and (max-width: 390px) {
    width: 300px;
  }

  @media screen and (max-width: 340px) {
    width: 250px;
  }
`;

export const IngredientGroup = styled.div`
  display: flex;
  align-items: center;
`;

export const IngredientImage = styled.img`
  height: 40px;
  width: 40px;
`;

export const IngredientName = styled.p`
  margin-left: 20px;
`;
