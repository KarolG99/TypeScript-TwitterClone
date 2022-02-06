import styled from "styled-components";

export const FormFieldWrapper = styled.div`
  display: flex;
  flex-direction: column;

  label {
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin-left: 4%;
    cursor: pointer;
  }

  textarea {
    border: none;
    overflow: auto;
    outline: none;
    resize: none;
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
  }

  input {
    border: none;
    overflow: auto;
    outline: none;
    font-size: ${({ theme }) => theme.fontSize.sm};
    margin: 1rem 1rem;
    background-color: ${({ theme }) => theme.colors.navy};
    color: ${({ theme }) => theme.colors.white};
  }
`;
