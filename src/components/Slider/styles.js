import styled from 'styled-components';

export const Main = styled.div`
width: 800px;
margin: 50px auto;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;

export const Container = styled.div`
height: 400px;
width: 600px;
display: flex;
border-radius: 50px;
overflow: hidden;
`;

export const MotionWrapper = styled.div`
  display: flex;
  transform: translateX(${(props) => props.transform || 0}px);
  transition: 0.5s;
  `;
