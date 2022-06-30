/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MotionWrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.transform || 0}px);
  transition: 0.5s;
  `;
