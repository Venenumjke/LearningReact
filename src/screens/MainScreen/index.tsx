/* eslint-disable no-unused-vars */
import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';
import Slider from '../../components/Slider';

const mainScreen: React.FC = () => {
  return (
    <>
      <Header>
        <HeaderTitle>Header</HeaderTitle>
      </Header>
      <TranslateTest />
      <Slider />
    </>
  );
}

export default mainScreen;
