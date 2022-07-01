import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';
import Slider from '../../components/Slider';

function mainScreen() {
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
