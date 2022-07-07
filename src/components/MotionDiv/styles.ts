/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

type typeForProps = {
  transform: number
}

export const MotionWrapper = styled.div`
  display: flex;
  transform: translateX(${(props: typeForProps) => props.transform || 0}px);
  transition: 0.5s;
  `;
