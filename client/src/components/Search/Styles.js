import styled from "styled-components";

export const FormInputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1.5rem;
`;

export const FormInput = styled.input`
  width: 230px;
  outline: none;
  padding: 8px 12px;
  margin: 0 1.3rem;
  border: 1px solid #ddd;
  border-radius: 15px;
  font-size: 1rem;

  &:focus {
    border: 1px solid #444;
  }
`;
