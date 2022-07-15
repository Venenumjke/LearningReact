/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 50px;
  align-items: center;
`;

export const Wrapper = styled.div`
  width: 500px;
  height: 50px;
  border: 2px solid teal;
  border-radius: 50px;
  overflow: hidden;
  margin-bottom: 20px;
  position: relative;
`;

export const Item = styled.div`
  width: 0%;
  height: 50px;
  background-color: red;
  transition: all, 2s, ease-out;
`;

export const ButtonWrapper = styled.div`
  display: flex;
`;

export const TimerWrapper = styled.div`
  position: absolute;
  left: 46%;
  top: 50%;
`;
