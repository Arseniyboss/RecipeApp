import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
  min-height: 88vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.form`
  width: 360px;
  padding: 2rem;
  margin-bottom: 0.8rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  color: #444;
  /* wrap long emails to the next line on Forgot Password page */
  overflow-wrap: break-word;
  word-wrap: break-word;

  @media screen and (max-width: 400px) {
    width: 320px;
  }

  @media screen and (max-width: 350px) {
    width: 250px;
  }
`;

export const FormHeading = styled.h1`
  margin-bottom: 1rem;

  @media screen and (max-width: 400px) {
    font-size: 1.6rem;
  }

  @media screen and (max-width: 350px) {
    font-size: 1.2rem;
  }
`;

export const FormGroup = styled.div`
  margin: 0.8rem 0;
`;

export const FormInput = styled.input`
  margin-top: 0.8rem;
  outline: none;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid #ddd;
  font-size: 1em;
  width: 100%;

  &:focus {
    border: 1px solid #444;
  }
`;

export const FormSelect = styled(FormInput)`
  cursor: pointer;
  appearance: none;
  background: white;
`;

export const TextArea = styled(FormInput)`
  resize: none;
`;

export const FormButton = styled.button`
  margin-top: 0.5rem;
  outline: none;
  border: none;
  border-radius: 36px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  font-size: 0.8em;
  padding: 10px 16px;
  background: #f7d653;
  color: white;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
`;

export const FormFooter = styled.div`
  margin-top: 20px;
`;

export const FormText = styled.span`
  margin-right: 15px;
`;

export const FormLink = styled(Link)`
  text-decoration: none;
  color: coral;

  &:hover {
    opacity: 0.8;
  }

  @media screen and (max-width: 400px) {
    display: block;
    margin-top: 10px;
    margin-left: 0;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: 0.8rem;
  font-weight: bold;
`;
