import styled, { css, keyframes } from 'styled-components';

const Animation = keyframes`
  0% {
    background-color:  rgba(0, 128, 128, 0);
  }
  100% {
    background-color:  rgba(0, 128, 128, 0.5);
  }
`;

export const ButtonWrapper = styled.button`
    width: 80px;
    height: 25px;
    border-radius: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    &:hover {
      animation: ${Animation} 1s;
    }
    ${({ primary }) => primary && css`
        background-color:  rgba(0, 128, 128, 0.13);
        border: 1px solid teal;   
    `}
    ${({ outline }) => outline && css`
        background-color: transparent;
        border: 1px solid teal;
        color: black;
    `}
  `;

export const ButtonText = styled.p`
    margin: 0 auto;
    font-weight: bold;
  `;
