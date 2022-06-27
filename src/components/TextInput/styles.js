import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const InputWrapper = styled.input`
  width: 30%;
  height: 30px;
  border-radius: 15px;
  padding-left: 10px;
  border: 1px solid teal;
  background-color: rgba(0, 128, 128, 0.13);
  margin-right: 20px;
  &::placeholder {
    color: teal;
    caret: black;
  }
  &:focus {
    outline: none;
  }
`;
