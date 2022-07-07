import styled from 'styled-components';

export const Container = styled.div`
    padding: 0;
    box-sizing: border-box;
    font-family: Comfortaa, cursive;
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const DescriptionDiv = styled.div`
    border: 5px solid teal;
    border-radius: 50px;
    margin: 30px;
    width: 70%;
    justify-content: center;
    height: 100px;
    background-color: rgba(0, 128, 128, 0.13);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Tittle = styled.p`
    text-align: center;
    margin-bottom: 15px;
`;

export const ContainerInput = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Status = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
    width: 50%;
    height: 70px;
    text-align: center;
    background-color: rgba(0, 128, 128, 0.266);
    border-radius: 10px;
`;

export const StatusText = styled.h3`
    margin: 5px;
    padding: 0;
`;
