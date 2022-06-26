import {
  IngredientContainer,
  IngredientGroup,
  IngredientImage,
  IngredientName,
} from "./Styles";

const Ingredient = ({ image, name, quantity }) => {
  return (
    <IngredientContainer>
      <IngredientGroup>
        <IngredientImage src={image} alt={name} />
        <IngredientName>{name}</IngredientName>
      </IngredientGroup>
      <p>{quantity}</p>
    </IngredientContainer>
  );
};

export default Ingredient;
