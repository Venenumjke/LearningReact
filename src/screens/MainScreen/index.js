import React from 'react';
import { Header, HeaderTitle } from './styles';
import TranslateTest from '../../components/TranslateTest';
import Slider from '../../components/Slider';
import ProgressBar from '../../components/ProgressBarContainer';

function mainScreen() {
  return (
    <>
      <Header>
        <HeaderTitle>Header</HeaderTitle>
      </Header>
      <TranslateTest />
      <Slider />
      <ProgressBar />
    </>
  );
}

export default mainScreen;
