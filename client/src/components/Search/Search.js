import { FormInputContainer, FormInput } from "./Styles";

const Search = ({ name, setName }) => {
  return (
    <FormInputContainer>
      <FormInput
        type="text"
        placeholder="Search Recipes..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </FormInputContainer>
  );
};

export default Search;
